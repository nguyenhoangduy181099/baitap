import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-thuongtet',
  templateUrl: './thuongtet.component.html',
  styleUrls: ['./thuongtet.component.css']
})
export class ThuongtetComponent implements OnInit {

  nhanVien = {
		fullname: 'Hoàng Nam',
		salary: 100000,
		gender: 'nam',
		age: 0
	}
	nhanVien2 = {
		fullname: '',
		salary: 0,
		gender: 'nam',
		age: 0
	}

	list = [
		{
			age: 'Dưới 25 tuổi',
			rate: 0.05
		},
		{
			age: 'Từ 25-40 tuổi',
			rate: 0.1
		},
		{
			age: 'Lớn hơn 40 tuổi',
			rate: 0.15
		}
	]

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

	constructor() { }

	ngOnInit() {
	}


	tinhthuong() {
		let t = this.nhanVien.salary * this.nhanVien.age;
		if (this.nhanVien.gender == 'nu') {
			t = t + 200000;
		}
		return t;
	}

	tinhthuong2() {
		if (this.nhanVien2.salary >= 2000000 && this.nhanVien2.fullname) {
			let t = this.nhanVien2.salary * this.nhanVien2.age;
			if (this.nhanVien2.gender == 'nu') {
				t = t + 200000;
			}
			return t;
		}
  }
}
