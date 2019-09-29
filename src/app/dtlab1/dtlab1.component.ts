import { Component, OnInit } from '@angular/core';
import{ActivatedRoute} from '@angular/router';
import { from } from 'rxjs';
@Component({
  selector: 'app-dtlab1',
  templateUrl: './dtlab1.component.html',
  styleUrls: ['./dtlab1.component.css']
})
export class Dtlab1Component implements OnInit {

  constructor(private rout:ActivatedRoute){}

  ngOnInit() {
    this.rout.paramMap.subscribe(para=>{this.id=para.get('id')})
    this.product=this.Lab1.find(item=>item.productId=== +this.id)
  }
  product:any;
  id;
  Lab1= [
    {
        "productId": 1,
        "productName": "Leaf Rake",
        "productCode": "GDN-0011",
        "releaseDate": "March 19, 2016",
        "description": "Leaf rake with 48-inch wooden handle.",
        "price": 19.95,
        "starRating": 3.2,
        "imageUrl": "1.jpg"
    },
    {
        "productId": 2,
        "productName": "Garden Cart",
        "productCode": "GDN-0023",
        "releaseDate": "March 18, 2016",
        "description": "15 gallon capacity rolling garden cart",
        "price": 32.99,
        "starRating": 4.2,
        "imageUrl": "2.jpg"
    },
    {
        "productId": 5,
        "productName": "Hammer",
        "productCode": "TBX-0048",
        "releaseDate": "May 21, 2016",
        "description": "Curved claw steel hammer",
        "price": 8.9,
        "starRating": 4.8,
        "imageUrl": "3.jpg"
    },
    {
        "productId": 8,
        "productName": "Saw",
        "productCode": "TBX-0022",
        "releaseDate": "May 15, 2016",
        "description": "15-inch steel blade hand saw",
        "price": 11.55,
        "starRating": 3.7,
        "imageUrl": "4.jpg"
    },
    {
        "productId": 10,
        "productName": "Video Game Controller",
        "productCode": "GMG-0042",
        "releaseDate": "October 15, 2015",
        "description": "Standard two-button video game controller",
        "price": 35.95,
        "starRating": 4.6,
        "imageUrl": "5.jpg"
    },
  ];
  pageTile='';
  Back() {
		window.history.back();
	}
}
