import { Component, OnInit } from '@angular/core';
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
  


  constructor(private cardservice:CardService){}

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
   
    
  }
  removecard(card:any){
    this.cardservice.removeCarItem(card);
  }
  emptycard(card:any){
    this.cardservice.removeAllcard();
  }
  addtocard(card:any){
    this.cardservice.addtocard(card);


  }
 

}
