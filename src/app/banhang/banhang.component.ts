import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-banhang',
  templateUrl: './banhang.component.html',
  styleUrls: ['./banhang.component.css']
})
export class BanhangComponent implements OnInit {

  constructor() { }

  ngOnInit() { }
  listbh = [
		{
			name: "Nước ngọt",
			price: 10000,
			quantity: 1
		},
		{
			name: "Cà phê đen",
			price: 12000,
			quantity: 1
		},
		{
			name: "Thuốc lá",
			price: 18000,
			quantity: 1
		},
	]
  thanhtien() {
		let sum = 0;
		for (let i = 0; i < this.listbh.length; i++) {
			sum += this.listbh[i].price * this.listbh[i].quantity;
		}
		return sum;
	}
}
