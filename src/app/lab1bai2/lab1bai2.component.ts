import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lab1bai2',
  templateUrl: './lab1bai2.component.html',
  styleUrls: ['./lab1bai2.component.css']
})
export class Lab1bai2Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  title =Lab1bai2Component ;
  web2= 
    [
      {
        "productId": "pd100",
        "imagesweb2":"assets/imagesweb2/1.jpg",
        "productName": "laptop",
        "price":30000,
        "Quatity":1,
      },
      {
        "productId": "pd101",
        "imagesweb2":"assets/imagesweb2/2.jpg",
        "productName": "mobile",
        "price":54000,
        "Quatity":5,
      },
      {
        "productId": "pd102",
        "imagesweb2":"assets/imagesweb2/3.jpg",
        "productName": "television",
        "price":22000,
        "Quatity":6,
      },
      {
        "productId": "pd103",
        "imagesweb2":"assets/imagesweb2/4.jpg",
        "productName": "headphone",
        "price":1300,
        "Quatity":13,
      }
    ];
  Tongtien()
  {
    let s=0;
    for(let i=0;i<this.web2.length;i++)
    {
      s=s+this.web2[i].price*this.web2[i].Quatity;
    }
    return s;
  }
  Tang(id)
  {
    
    for(let i=0;i<this.web2.length;i++)
    {
      if(this.web2[i].productId===id)
      this.web2[i].Quatity++ ;
        
      
    }
  }
  Giam(id)
  {
    for(let i=0;i<this.web2.length;i++)
    {
      if(this.web2[i].productId===id)
      this.web2[i].Quatity-- ;
        
  }
}

}
