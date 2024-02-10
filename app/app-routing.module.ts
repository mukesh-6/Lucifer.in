import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AboutComponent } from './about/about.component';
import { NothingComponent } from './nothing/nothing.component';
import { HomeComponent } from './home/home.component';
import { WatchComponent } from './watch/watch.component';
import { share } from 'rxjs';
import { ShoesComponent } from './shoes/shoes.component';
import { SandalsComponent } from './sandals/sandals.component';
import { ProductdltComponent } from './productdlt/productdlt.component';

const routes: Routes = [
  {
    path:`login-user`,
    component:LoginComponent
  },
  {
    path:`register-user`,
    component:RegisterComponent
  },
  {
    path:`about`,
    component:AboutComponent
  },
  {
    path:`nothing`,
    component:NothingComponent
  },
  {
    path:`Home`,
    component:HomeComponent
  },
  {
    path:`watch`,
    component:WatchComponent
  },
  {
    path:`shoes`,
    component:ShoesComponent
  },
  {
    path:`sandals`,
    component:SandalsComponent
  },
  {
    path:'',
    redirectTo:`login-user`,
    pathMatch:`full`
  },
  {
    path:`productdlt`,
    component:ProductdltComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
