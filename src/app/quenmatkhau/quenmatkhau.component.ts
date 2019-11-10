import { Component, OnInit, Input, Output } from '@angular/core';
import { RouterModule, ActivatedRoute, ParamMap } from '@angular/router';
import { ServiceService } from '../services/service.service';
import { Subject } from '../models/subject';
import { Student } from '../models/student';
import { NgForm } from '@angular/forms';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';



@Component({
  selector: 'app-quenmatkhau',
  templateUrl: './quenmatkhau.component.html',
  styleUrls: ['./quenmatkhau.component.css']
})
export class QuenmatkhauComponent implements OnInit {
  subjects: Subject[];
	login = [];
	subject: any = [];
	showQuiz = true;
	userLogin = [
		{
			id: null,
			username: "TÀI KHOẢN",
			password: "",
			
		}
  ];



  
  userLocal = [];
	studentLocal = [];
	dataLocal = [];
	getData = [];
	_submit = false;
	username: string;
	email: string;



	constructor(
   
    private userService: ServiceService,
		private rout: ActivatedRoute,
		private http: HttpClient,
	
		private service: ServiceService,
    private router: ActivatedRoute,
      
	) { }

	ngOnInit() {
		this.getSubject();
		this.login = JSON.parse(localStorage.getItem('Login'));
		this.getlogin();
		this.showTestQuiz();
    


    this.userLocal = JSON.parse(localStorage.getItem('users'));
		this.studentLocal = JSON.parse(localStorage.getItem('students'));
		this.dataLocal = this.studentLocal.concat(this.userLocal);
  }

	getSubject() {
		this.service.getListSubjects().subscribe(data => this.subjects = data)
	}

	getlogin() {
		if (this.login !== null) {
			this.userLogin = this.login;
		}
	}

	logout() {
		if (this.login == null) {
			alert("Bạn Chưa Đăng Nhập Tài Khoản")
			return false;
		} else {
			localStorage.removeItem("Login");
			window.location.replace("");
		}
	}

	checkIn() {
		if (this.login !== null) {
			alert("Vui Lòng Đăng Xuất Tài Khoản !!!")
			return false;
		}
	}
	checkTest() {
		let arr = JSON.parse(localStorage.getItem('Login'));
		if (arr === null) {
			alert("Vui Lòng Đăng Nhập Tài Khoản Của Bạn");
			window.location.replace("");
		}
	}
	checkTT() {
		let arr = JSON.parse(localStorage.getItem('Login'));
		if (arr === null) {
			alert("Vui Lòng Đăng Nhập Tài Khoản Của Bạn");
		}
	}
	showTestQuiz() {
		let arr = JSON.parse(localStorage.getItem('Login'));
		if (arr !== null) {
			this.showQuiz = true;
		} else {
			this.showQuiz = false;
		}
	} 

	



  checkData(formSend: NgForm) {
		let count = 0;
		if (formSend.valid) {
			for (var i = 0; i < this.dataLocal.length; i++) {
				if (this.dataLocal[i].username === formSend.value.username &&
					this.dataLocal[i].email === formSend.value.email) {
					this.getData.push(this.dataLocal[i]);
					this._submit = true;
					count++;
				}
			}
			if (count == 0) {
				alert('Thông Tin Không Chính Xác');
			}
		}
	}

	back() {
		this._submit = false;
		this.getData = [];
		this.username = null;
		this.email = null;
	}
}