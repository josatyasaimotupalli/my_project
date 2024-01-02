import { Component, OnInit } from '@angular/core';
import { FavouriteService } from '../service/favourite.service';
import { CardComponent } from '../card/card.component';
import { CardService } from '../service/card.service';
@Component({
  selector: 'app-favourite',
  templateUrl: './favourite.component.html',
  styleUrls: ['./favourite.component.css']
})
export class FavouriteComponent implements OnInit{
  public product:any=[]
  public grandTotal : number = 0;
  public totalcard : number = 0;
  public favourite: number= 0;
  


  constructor(private FavouriteService:FavouriteService ,private cardservice:CardService){}
  ngOnInit(): void {
    this.FavouriteService.getProducts()
    .subscribe(res=>{
      this.product=res;
      this.grandTotal = this.FavouriteService.getTotalPrice();
    })
  
    this.FavouriteService.getProducts()
    .subscribe(res=>{
      this.favourite = res.length;

    })
    this.cardservice.getProducts()
    .subscribe(res=>{
      this.totalcard = res.length;

    })
   
    
  }
  removecard(card:any){
    this.FavouriteService.removeCarItem(card);
  }
  emptycard(card:any){
    this.FavouriteService.removeAllcard();
  }
  Favouritetocard(card:any){
    this.FavouriteService.favouritetocard(card);


  }
  addtocard(card:any){
    this.cardservice.addtocard(card);


  }
 

}
