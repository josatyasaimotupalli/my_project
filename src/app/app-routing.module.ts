import { NgModule } from '@angular/core';
import { ActivatedRoute, RouterModule, Routes } from '@angular/router';
import { Page1Component } from './page1/page1.component';
import { Page2Component } from './page2/page2.component';


const routes: Routes = [
  {path:'web', loadChildren:()=>import('./web/web.module').then(mod=>mod.WebModule)},
  {path:'dashbord',loadChildren:()=>import('./user-dashbord/user-dashbord.module').then(mod=>mod.UserDashbordModule)},
  {path:'page1',component:Page1Component},
  {path:'page2',component:Page2Component},
  


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
