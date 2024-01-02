import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CardService } from '../service/card.service';

import { FavouriteService } from '../service/favourite.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit{
  public productList : any ;
  public product:any=[]
  public totalcard : number = 0;
  public favourite: number= 0;
  searchKey:string ="";
  public searchTerm : string = '';

  cards: any[]=[];

  constructor(private http: HttpClient,private cardservice: CardService,private FavouriteService:FavouriteService) {}
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

 


  Favouritetocard(card:any){
    this.FavouriteService.favouritetocard(card);


  }

  removecard(card:any){
    this.cardservice.removeCarItem(card);
  }
  emptycard(){
    this.cardservice.removeAllcard();
  }
  
 
}



