import { Injectable } from '@angular/core';
import {HttpClient, HttpClientModule} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  public product_api = 'https://dummyjson.com/products';

constructor(public httpClient : HttpClient) { 

}
  getData(){
    return this.httpClient.get(this.product_api)
  }
  postData(userDetails:any){
    return this.httpClient.post('https://dummyjson.com/products/add',userDetails)
  }
  putData(userdata:any){
    return this.httpClient.put('https://dummyjson.com/products/1',userdata)
  }
  delete(){
    return this.httpClient.delete('https://dummyjson.com/products/1')
  }

}
