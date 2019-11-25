import { Component, OnInit, Input, Output } from '@angular/core';
import { RouterModule, ActivatedRoute, ParamMap } from '@angular/router';
import { ServiceService } from '../services/service.service';
import { Subject } from '../models/subject';
import { Student } from '../models/student';
import { NgForm } from '@angular/forms';





@Component({
  selector: 'app-thunghiem',
  templateUrl: './thunghiem.component.html',
  styleUrls: ['./thunghiem.component.css']
})
export class ThunghiemComponent implements OnInit {

    subjects: Subject[];
	login = [];
	subject: any = [];
	showQuiz = true;
	userLogin = [
		{
			id: null,
			username: "TÀI KHOẢN",
			password: "",
			fullname: "",
			email: "",
			gender: "",
			birthday: "",
			
			marks: null
		}
	];

	constructor(
		private service: ServiceService,
		private router: ActivatedRoute
	) { }

	ngOnInit() {
		this.getSubject();
		this.login = JSON.parse(localStorage.getItem('Login'));
		this.getlogin();
		this.showTestQuiz();
		this.timeOnline();
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

	timeOnline() {
		var time = new Date();
		var hours = time.getHours();
		var minutes = time.getMinutes();
		var seconds = time.getSeconds();

		var days = ["Chủ Nhật", "Thứ Hai", "Thứ Ba", "Thứ Tư", "Thứ Năm", "Thứ Sáu", "Thứ Bảy"];
		var dates = time.getDate();
		var months = time.getMonth() + 1;
		var years = time.getFullYear();
		var session = "AM";
		var timer = document.getElementById('timer-0');

		var hour = (hours < 10) ? "0" + hours : hours;
		var minute = (minutes < 10) ? "0" + minutes : minutes;
		var second = (seconds < 10) ? "0" + seconds : seconds;
		var sessions = (hours > 12) ? session = "PM" : session;
		var date = (dates < 10) ? "0" + dates : dates;

		var startClock = hour + ":" + minute + ":" + second + " " + sessions + " - ";
		var startDate = days[time.getDay()] + " " + date + "/" + months + "/" + years;

		timer.innerHTML = startClock + "  " + startDate;
		setTimeout(() => { this.timeOnline() }, 1000);
	}

}