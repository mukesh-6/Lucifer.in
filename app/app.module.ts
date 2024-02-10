import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AboutComponent } from './about/about.component';
import { NothingComponent } from './nothing/nothing.component';
import { HomeComponent } from './home/home.component';
import { WatchComponent } from './watch/watch.component';
import { ShoesComponent } from './shoes/shoes.component';
import { SandalsComponent } from './sandals/sandals.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FooterComponent } from './footer/footer.component';
import { ProductdltComponent } from './productdlt/productdlt.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    AboutComponent,
    NothingComponent,
    HomeComponent,
    WatchComponent,
    ShoesComponent,
    SandalsComponent,
    FooterComponent,
    ProductdltComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
