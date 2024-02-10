import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-watch',
  templateUrl: './watch.component.html',
  styleUrls: ['./watch.component.css']
})
export class WatchComponent {
  constructor(private objRou:Router){

  }
  redirect(){
    this.objRou.navigateByUrl(`/productdlt`)
  }
  watchList:any[]=[
    {
      img:"../../assets/images/img.webp",
      name:"SONATA",
      price:1500,
      rating:"",
      price2:3090,
    },
    {
      img:"../../assets/images/rolex.jpg",
      name:"ROLEX",
      price:1200,
      rating:"",
      price2:3600,
    },
    {
      img:"../../assets/images/titan.jpg",
      name:"TITAN",
      price:2200,
      rating:"",
      price2:3100,
    },
    {
      img:"../../assets/images/gshock.jpg",
      name:"G-SHOCK",
      price:5800,
      rating:"",
      price2:6700,
    },
    {
      img:"../../assets/images/quartz.jpg",
      name:"QUARTZ",
      price:3200,
      rating:"",
      price2:5000,
    },
    {
      img:"../../assets/images/timex.jpg",
      name:"TIMEX",
      price:3200,
      rating:"",
      price2:4500,
    },
    {
      img:"../../assets/images/pumaw.jpg",
      name:"PUMA",
      price:1200,
      rating:"",
      price2:3000,
    },
    {
      img:"../../assets/images/fastrack.jpg",
      name:"FASTRACK",
      price:600,
      rating:"",
      price2:1000,
    },
    
    {img:"../../assets/images/img.webp",
    name:"SONATA",
    price:1400,
    rating:"",
    price2:7000,
  },
  
  {img:"../../assets/images/img.webp",
  name:"SONATA",
  price:1200,
  rating:"",
},

{img:"../../assets/images/img.webp",
name:"SONATA",
price:1900,
price2:3000,
rating:"",
},

{img:"../../assets/images/img.webp",
name:"SONATA",
price:3000,
rating:"",
price2:4000,
},
  ]

}
