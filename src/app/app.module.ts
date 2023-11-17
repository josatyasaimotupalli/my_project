import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { ViewPipe } from './view.pipe';
import {HttpClientModule} from '@angular/common/http';
import {ReactiveFormsModule} from '@angular/forms';
import { Page1Component } from './page1/page1.component';
import { Page2Component } from './page2/page2.component';
import { Page3Component } from './page3/page3.component';
import { Page0Component } from './page0/page0.component';
import { Page10Component } from './page1.0/page1.0.component';
import { CardComponent } from './card/card.component';
import { Page4Component } from './page4/page4.component';
import { FashionComponent } from './fashion/fashion.component';
import { FilterPipe } from './filter.pipe';
import { FavouriteComponent } from './favourite/favourite.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';





@NgModule({
  declarations: [
    AppComponent,
    ViewPipe,
    Page1Component,
    Page2Component,
    Page3Component,
    Page0Component,
    Page10Component,
    CardComponent,
    Page4Component,
    FashionComponent,
    FilterPipe,
    FavouriteComponent,
    ProductDetailComponent,
  
   
    
  

  

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
export class SubjectModule {}

