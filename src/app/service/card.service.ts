import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CardService {

  public cardItemList : any =[]
  public productList = new BehaviorSubject<any>([]);
  public search = new BehaviorSubject<string>("");

  constructor() { }
  getProducts(){
    return this.productList.asObservable();
  }
  setProduct(product : any){
    this.cardItemList.push(...product);
    this.productList.next(product);
  }
  addtocard(product:any){
    this.cardItemList.push(product);
    this.productList.next(this.cardItemList);
    this.getTotalPrice();
    console.log(this.cardItemList)
  }
  getTotalPrice() : number{
    let grandTotal =0
    this.cardItemList.map((a:any)=>{
      grandTotal += a.total;
    })
    return grandTotal
  }
  removeCarItem(product:any){
    this.cardItemList.map((a:any,index:any)=>{
      if(product.id===a.id){
        this.cardItemList.splice(index,1);
      }
    })
    this.productList.next(this.cardItemList);
  }
  removeAllcard(){
    this.cardItemList=[]
    this.productList.next(this.cardItemList);
  }
  
}
