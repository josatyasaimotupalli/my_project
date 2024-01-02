import { Component ,OnInit} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CardService } from '../service/card.service';
import { NgToastService } from 'ng-angular-popup';
import { FavouriteService } from '../service/favourite.service';



@Component({
  selector: 'app-page1.0',
  templateUrl: './page1.0.component.html',
  styleUrls: ['./page1.0.component.css']
})
export class Page10Component implements OnInit{
  public productList : any ;
  public totalcard : number = 0;
  searchKey:string ="";
  public searchTerm : string = '';
  public favourite : number = 0;

  cards: any[]=[];

  constructor(private http: HttpClient,private cardservice: CardService,private toast:NgToastService,private FavouriteService:FavouriteService) {}
  ngOnInit(): void {
   
    
    this.http.get<any[]>('assets/page10.json').subscribe(data => {
      this.cards = data;
      this.cards.forEach((a:any)=>{
        Object.assign(a,{quantity:1,total:a.price});
      });
    });
    this.cardservice.getProducts()
    .subscribe(res=>{
      this.totalcard = res.length;

    });
    this.cardservice.search.subscribe(val=>{
      this.searchKey = val;
    })
    this.FavouriteService.getProducts()
    .subscribe(res=>{
      this.favourite = res.length;

    })
  }
  
  addtocard(card:any){
    this.cardservice.addtocard(card);


  }
  search(event:any){
    this.searchTerm=(event.target as HTMLInputElement).value;
    console.log(this.searchTerm)
    this.cardservice.search.next(this.searchTerm);
  }
  bottomLeft(){
    this.toast.success({detail:'successfully',summary:'added items in cart',duration:2000});
  }
  Favouritetocard(card:any){
    this.FavouriteService.favouritetocard(card);


  }
  
  
 
  }



