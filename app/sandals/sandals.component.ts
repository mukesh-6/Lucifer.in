import { Component } from '@angular/core';

@Component({
  selector: 'app-sandals',
  templateUrl: './sandals.component.html',
  styleUrls: ['./sandals.component.css']
})
export class SandalsComponent {
  shoesList:any[]=[
    {
      img:"../../assets/images/pumas.jpg",
      name:"Puma",
      price:1500,
      rating:"",
      price2:3090,
    },
    {
      img:"../../assets/images/aadis.jpg ",
      name:"Aadi",
      price:1200,
      rating:"",
      price2:3600,
    },
    {
      img:"../../assets/images/bawalas.jpg",
      name:"Bawala",
      price:2200,
      rating:"",
      price2:3100,
    },
    {
      img:"../../assets/images/walkaros.jpg",
      name:"Walkaro",
      price:5800,
      rating:"",
      price2:6700,
    },
    {
      img:"../../assets/images/batas.jpg",
      name:"Bata",
      price:3200,
      rating:"",
      price2:5000,
    },
    {
      img:"../../assets/images/nikes.jpg",
      name:"Nike",
      price:3200,
      rating:"",
      price2:4500,
    },
    {
      img:"../../assets/images/woodlands.jpg",
      name:"Woodlands",
      price:1200,
      rating:"",
      price2:3000,
    },
    {
      img:"../../assets/images/skecherss.jpg",
      name:"Skechers",
      price:600,
      rating:"",
      price2:1000,
    },
    
    {img:"../../assets/images/reebooks.jpg",
    name:"Rebook",
    price:1400,
    rating:"",
    price2:7000,
  },
  
  {img:"../../assets/images/filas.jpg",
  name:"Fila",
  price:1200,
  rating:"",
},

{img:"../../assets/images/sparxs.jpg",
name:"Sparx",
price:1900,
price2:3000,
rating:"",
},

{img:"../../assets/images/jordans.jpg",
name:"Jordan",
price:3000,
rating:"",
price2:4000,
},
  ]

}
