import { Component } from '@angular/core';

@Component({
  selector: 'app-shoes',
  templateUrl: './shoes.component.html',
  styleUrls: ['./shoes.component.css']
})
export class ShoesComponent {
  shoesList:any[]=[
    {
      img:"../../assets/images/shoes1.webp",
      name:"Puma",
      price:1500,
      rating:"",
      price2:3090,
    },
    {
      img:"../../assets/images/aadi.jpg ",
      name:"Aadi",
      price:1200,
      rating:"",
      price2:3600,
    },
    {
      img:"../../assets/images/bawala.jpg",
      name:"Bawala",
      price:2200,
      rating:"",
      price2:3100,
    },
    {
      img:"../../assets/images/walkaro.jpg",
      name:"Walkaro",
      price:5800,
      rating:"",
      price2:6700,
    },
    {
      img:"../../assets/images/bata.jpg",
      name:"Bata",
      price:3200,
      rating:"",
      price2:5000,
    },
    {
      img:"../../assets/images/nike.jpg",
      name:"Nike",
      price:3200,
      rating:"",
      price2:4500,
    },
    {
      img:"../../assets/images/woodland.jpg",
      name:"Woodlands",
      price:1200,
      rating:"",
      price2:3000,
    },
    {
      img:"../../assets/images/skechers.jpg",
      name:"Skechers",
      price:600,
      rating:"",
      price2:1000,
    },
    
    {img:"../../assets/images/reebook.jpg",
    name:"Rebook",
    price:1400,
    rating:"",
    price2:7000,
  },
  
  {img:"../../assets/images/fila.jpg",
  name:"Fila",
  price:1200,
  rating:"",
},

{img:"../../assets/images/saprx.avif",
name:"Sparx",
price:1900,
price2:3000,
rating:"",
},

{img:"../../assets/images/jordan.jpeg",
name:"Jordan",
price:3000,
rating:"",
price2:4000,
},
  ]

}
