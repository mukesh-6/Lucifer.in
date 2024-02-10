import { Component } from '@angular/core';
import { FormGroup, FormControl,FormControlName} from '@angular/forms';
import { cityModel } from '../model/citySc';
@Component({
  selector: 'app-nothing',
  templateUrl: './nothing.component.html',
  styleUrls: ['./nothing.component.css']
})
export class NothingComponent{

  registerFrmGrp = new FormGroup({
    fname: new FormControl(),
    lname: new FormControl(),
    email: new FormControl(),
    password: new FormControl(),
    address: new FormControl(),
    city: new FormControl()
  })
  cities: cityModel[] =[
    {
      citycode:'TVT',
      cityvalue:'THIRUVOTTRIYUR'
    },
    {
      citycode:'TH',
      cityvalue:'THIRUVALLUR'
    },
    {
      citycode:'GPD',
      cityvalue:'GUMMDIPOONDI'
    },
    {
      citycode:'CHE',
      cityvalue:'CHENNAI'
    },
    {
      citycode:'TBM',
      cityvalue:'TAMBARAM'
    },
  ]

  onSignup(){
    console.log(this.registerFrmGrp.value)
  }
  
}
