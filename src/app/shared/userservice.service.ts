import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserserviceService {
  userdata:any;

  constructor() { }

  setData(username:any){
    this.userdata = username 
    
  }
  getdata(){
    return this.userdata
  }
}
