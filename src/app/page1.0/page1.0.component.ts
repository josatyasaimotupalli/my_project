import { Component ,OnInit} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CardService } from '../service/card.service';

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

  cards: any[]=[];

  constructor(private http: HttpClient,private cardservice: CardService ) {}
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
  }
  
  addtocard(card:any){
    this.cardservice.addtocard(card);


  }
  search(event:any){
    this.searchTerm=(event.target as HTMLInputElement).value;
    console.log(this.searchTerm)
    this.cardservice.search.next(this.searchTerm);
  }
}


