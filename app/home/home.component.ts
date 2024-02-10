import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  constructor(private objRou:Router)
  {

  }


//   productList:any[]=[
//     {
//       name:`WATCHES`,
//       Imgurl:"../../assets/images/img.webp",
//       button:"this.explore2()"

//     },
//     {
//       name:`SHOES`,
//       Imgurl:"../../assets/images/img.webp"
//     },
//     {
//       name:`SANDALS`,
//       Imgurl:"../../assets/images/img.webp"
//     },
//     {
//       name:`SANDALS`,
//       Imgurl:"../../assets/images/img.webp"
//     },
//     {
//       name:`SANDALS`,
//       Imgurl:"../../assets/images/img.webp"
//     },
//     {
//       name:`SANDALS`,
//       Imgurl:"../../assets/images/img.webp"
//     }

//   ]
 
// 
explore(){
  this.objRou.navigateByUrl(`/watch`)
}

explore2(){
  this.objRou.navigateByUrl(`/shoes`)
}

explore3(){
  this.objRou.navigateByUrl(`/sandals`)
}
}


