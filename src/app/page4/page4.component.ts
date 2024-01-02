import { Component } from '@angular/core'; 
import { HttpClient } from '@angular/common/http';
import { CardService } from '../service/card.service';
import { FavouriteService } from '../service/favourite.service';
@Component({
  selector: 'app-page4',
  templateUrl: './page4.component.html',
  styleUrls: ['./page4.component.css']
})
export class Page4Component {
  public productList : any ;
  public totalcard : number = 0;
  public favourite: number= 0;
  searchKey:string ="";
  public searchTerm : string = '';

  cards: any[]=[];

  constructor(private http: HttpClient,private cardservice: CardService ,private FavouriteService:FavouriteService){
    this.cardservice.getProducts()
    .subscribe(res=>{
      this.totalcard = res.length;

    });
    this.FavouriteService.getProducts()
    .subscribe(res=>{
      this.favourite = res.length;

    })

    window.addEventListener('scroll',reveal);

    function reveal(){
      var reveals = document.querySelectorAll('.reveal');
    
      for(var i=0; i< reveals.length; i++){
    
        var windowheight = window.innerHeight;
        var revealtop = reveals[i].getBoundingClientRect().top;
        var revealpoint = 150;
    
        if(revealtop < windowheight - revealpoint ){
          reveals[i].classList.add('active');
        }
        else{
          reveals[i].classList.remove('active');
        }
      }
    }
  }

} 
