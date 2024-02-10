import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  constructor(private objRou:Router)
  {
    
  }

  login(){
    this.objRou.navigateByUrl(`/login-user`)
  }
  register(){
    this.objRou.navigateByUrl(`/Home`)
  }

}
