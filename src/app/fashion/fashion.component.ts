import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CardService } from '../service/card.service';

import { FavouriteService } from '../service/favourite.service';

@Component({
  selector: 'app-fashion',
  templateUrl: './fashion.component.html',
  styleUrls: ['./fashion.component.css']
})
export class FashionComponent implements OnInit {
  public productList : any ;
  public totalcard : number = 0;
  public favourite: number= 0;
  searchKey:string ="";
  public searchTerm : string = '';

  cards: any[]=[];

  constructor(private http: HttpClient,private cardservice: CardService,private FavouriteService:FavouriteService) {}
  ngOnInit(): void {
    
    this.http.get<any[]>('assets/fashion.json').subscribe(data => {
      this.cards = data;
      this.cards.forEach((a:any)=>{
        Object.assign(a,{quantity:1,total:a.price});
      })
    });
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
}
