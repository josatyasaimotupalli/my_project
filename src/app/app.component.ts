import { Component } from '@angular/core';
import { every } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name="josatyasai"

  todays=new Date()

  listData=[
    {
      name:'josatyasai',
      gender:'male'
    },
    {
      name:'sivaram',
      gender:'male'
    }
  ]

}

    



