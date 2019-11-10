import { Component, OnInit, Input, Output,EventEmitter } from '@angular/core';
import { RouterModule, ActivatedRoute, ParamMap } from '@angular/router';
import { ServiceService } from '../services/service.service';
import { Subject } from '../models/subject';
import { Student } from '../models/student';
import { NgForm,FormGroup, Validators } from '@angular/forms';




@Component({
  selector: 'app-dangnhap',
  templateUrl: './dangnhap.component.html',
  styleUrls: ['./dangnhap.component.css']
})
export class DangnhapComponent implements OnInit {
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



  students: Student[];
	studentLocal = [];
	userLocal = [];
	listDataLocal = [];
	login1 = [];
	_submit = false;
	Checkbox = false;
	username = "";
	password = "";




	constructor(
     private service: ServiceService,
	
    private router: ActivatedRoute,
      
	) { }

	ngOnInit() {
		this.getSubject();
		this.login = JSON.parse(localStorage.getItem('Login'));
		this.getlogin();
		this.showTestQuiz();
    


    this.getUsers();
		this.userLocal = JSON.parse(localStorage.getItem('users'));
		this.studentLocal = JSON.parse(localStorage.getItem('students'));		
		this.listDataLocal = this.studentLocal.concat(this.userLocal);
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

	


  getUsers() {
		this.service.getListUsers().subscribe(data => this.students = data);
	}
 
	onSubmit(formUser: NgForm) {
		let count = 0;
		if (formUser.valid) {
			this._submit = true;
			for (var i = 0; i < this.listDataLocal.length; i++) {
				if (this.listDataLocal[i].username == formUser.value.username &&
					this.listDataLocal[i].password == formUser.value.password) {
					this.login1.push(this.listDataLocal[i]);				
					count++;
				}
			}
			if (count == 0) {
				alert("Thông Tin Không Chính Xác")
			} else {
				localStorage.setItem("Login", JSON.stringify(this.login1));
				window.location.replace("");
			}
		}
		else if (count == 0 && formUser.dirty) {
			alert("Thông Tin Không Chính Xác")
		}
		else {
			alert("Vui Lòng Nhập Thông Tin")
		}
	}
	checkIn1() {
		let arr = JSON.parse(localStorage.getItem('Login'))
		if(arr !== null){
			alert("Vui Lòng Đăng Xuất Tài Khoản")
			return false;	
		}
	}
}