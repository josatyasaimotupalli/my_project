import { Component } from '@angular/core';

@Component({
  selector: 'app-page3',
  templateUrl: './page3.component.html',
  styleUrls: ['./page3.component.css']
})
export class Page3Component {
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
