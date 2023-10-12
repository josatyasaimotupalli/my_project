import { Component } from '@angular/core';

@Component({
  selector: 'app-page2',
  templateUrl: './page2.component.html',
  styleUrls: ['./page2.component.css']
})
export class Page2Component {
  constructor(){
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
