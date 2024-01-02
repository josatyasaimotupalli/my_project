import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CardService } from '../service/card.service';
import { NgToastService } from 'ng-angular-popup';
import { FavouriteService } from '../service/favourite.service';
@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
  public productList : any ;
  public product:any=[]
  public totalcard : number = 0;
  public favourite: number= 0;
  searchKey:string ="";
  public searchTerm : string = '';

  cards: any[]=[];

  constructor(private http: HttpClient,private cardservice: CardService,private toast:NgToastService ,private FavouriteService:FavouriteService) {}
  ngOnInit(): void
    
    ngOnInit(): void {
      this.cardservice.getProducts()
      .subscribe(res=>{
        this.product=res;
      })
 
    this.cardservice.getProducts()
    .subscribe(res=>{
      this.totalcard = res.length;

    });
  

    this.cardservice.search.subscribe(val=>{
      this.searchKey = val;
    });
  
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
    this.toast.success({detail:'successfully',summary:'added items in cart',duration:1000});
  }

  Favouritetocard(card:any){
    this.FavouriteService.favouritetocard(card);


  }
  fashionLeft(){
    this.toast.info
    ({detail:'successfully',summary:'added items in favourites',position: 'bottomRight', duration:1000});
  }
  removecard(card:any){
    this.cardservice.removeCarItem(card);
  }
  emptycard(){
    this.cardservice.removeAllcard();
  }
  
 
}


