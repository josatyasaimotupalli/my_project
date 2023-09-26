import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { BehaviorSubject,ReplaySubject,AsyncSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

 /* public userdata = new Subject<any>();
  constructor() {}

  getdata(){
    this.userdata.error('josatyasai');
  }*/
public data = new AsyncSubject<any>()
  constructor(){
    this.data.next('josatyasai')
    this.data.next('satyasai')
    this.data.next('josatyasai+>1')
    this.data.next('josatyasai+>2')
    this.data.complete()
    this.data.next(2344)
  }


  }
