import { AfterContentInit, AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { every } from 'rxjs';
import { DataService } from './shared/data.service';
import { UserserviceService } from './shared/userservice.service';
import { FormsModule, NgForm } from '@angular/forms';
import { ApiService } from './shared/api.service';
import { HttpResponse } from '@angular/common/http';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],

})
export class AppComponent implements OnInit {
 constructor(){


 }
 ngOnInit(): void {
   
 }

}