import { Component, NgModule } from '@angular/core';
import { ActivatedRoute, RouterModule, Routes } from '@angular/router';
import { Page1Component } from './page1/page1.component';
import { Page2Component } from './page2/page2.component';
import { Page3Component } from './page3/page3.component';
import { Page0Component } from './page0/page0.component';
import { Page10Component } from './page1.0/page1.0.component';
import { CardComponent } from './card/card.component';
import { Page4Component } from './page4/page4.component';
import { FashionComponent } from './fashion/fashion.component';
import { FavouriteComponent } from './favourite/favourite.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';

const routes: Routes = [
  {path: "", redirectTo:'/web/login',pathMatch:'full'},
  {path:'web', loadChildren:()=>import('./web/web.module').then(mod=>mod.WebModule)},
  {path:'dashbord',loadChildren:()=>import('./user-dashbord/user-dashbord.module').then(mod=>mod.UserDashbordModule)},
  {path:'page1',component:Page1Component},
  {path:'page2',component:Page2Component},
  {path:'page3',component:Page3Component},
  {path:'page0',component:Page0Component},
  {path:'page10',component:Page10Component},
  {path:'card',component:CardComponent},
  {path:'page4',component:Page4Component},
  {path:'fashion',component:FashionComponent},
  {path:'favourite',component:FavouriteComponent},
  {path:'product-detail',component:ProductDetailComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
  constructor(public router : ActivatedRoute){
    console.log(this.router.root);
    
  }
}
