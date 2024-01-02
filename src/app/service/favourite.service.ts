import { Injectable, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FavouriteService {
  [x: string]: any;

  public FavouriteItemList : any =[]
  public productList = new BehaviorSubject<any>([]);
  public search = new BehaviorSubject<string>("");

  constructor() { }
  getProducts(){
    return this.productList.asObservable();
  }
  setProduct(product : any){
    this.FavouriteItemList.push(...product);
    this.productList.next(product);
  }
  favouritetocard(product:any){
    this.FavouriteItemList.push(product);
    this.productList.next(this.FavouriteItemList);
    this.getTotalPrice();
    console.log(this.FavouriteItemList)
  }
  getTotalPrice() : number{
    let grandTotal =0
    this.FavouriteItemList.map((a:any)=>{
      grandTotal += a.total;
    })
    return grandTotal
  }
  removeCarItem(product:any){
    this.FavouriteItemList.map((a:any,index:any)=>{
      if(product.id===a.id){
        this.FavouriteItemList.splice(index,1);
      }
    })
    this.productList.next(this.FavouriteItemList);
  }
  removeAllcard(){
    this.FavouriteItemList=[]
    this.productList.next(this.FavouriteItemList);
  }

  
}
