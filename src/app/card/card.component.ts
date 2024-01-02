import { Component, OnInit } from '@angular/core';
import { CardService } from '../service/card.service';
import { FavouriteService } from '../service/favourite.service';
@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {


  public product:any=[]
  public grandTotal : number = 0;
  public totalcard : number = 0;
  public favourite: number= 0;


  constructor(private cardservice:CardService,private FavouriteService:FavouriteService){}

  ngOnInit(): void {
    this.cardservice.getProducts()
    .subscribe(res=>{
      this.product=res;
      this.grandTotal = this.cardservice.getTotalPrice();
    })
    this.cardservice.getProducts()
    .subscribe(res=>{
      this.totalcard = res.length;

    })
    this.FavouriteService.getProducts()
    .subscribe(res=>{
      this.favourite = res.length;

    })
    
  }
  removecard(card:any){
    this.cardservice.removeCarItem(card);
  }
  emptycard(){
    this.cardservice.removeAllcard();
  }
  Favouritetocard(card:any){
    this.FavouriteService.favouritetocard(card);


  }
  

}
