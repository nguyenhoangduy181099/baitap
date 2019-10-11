import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tihtienthnd',
  templateUrl: './tihtienthnd.component.html',
  styleUrls: ['./tihtienthnd.component.css']
})
export class TihtienthndComponent implements OnInit {
  tttt=[
    {
      age: "dưới 25",
      rate: 0.07
    },
    {
      age: "từ 25 đến 40",
      rate: 0.1
    },
    {
      age: "trên 40",
      rate: 0.15
    }
  ]
  nhanvien = {
    hoten:"",
    luong: null,
    tuoi: '',
    phai: '',
    rate: null,
    thuong: null,
  }
  thuong(){
    switch (this.nhanvien.tuoi){
      case "1":
        this.nhanvien.rate = 0.07;
        break;
      case "2":
        this.nhanvien.rate = 0.1;
        break;
      case "3":
        this.nhanvien.rate = 0.15;
        break;
    }
    this.nhanvien.thuong = (this.nhanvien.luong)*this.nhanvien.rate;
    if(this.nhanvien.phai == "nu"){
      this.nhanvien.thuong += 200000;
    }
  }

  constructor() { }

  ngOnInit() {
  }

}