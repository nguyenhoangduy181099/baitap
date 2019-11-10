import { Component, OnInit, Input, Output } from '@angular/core';
import { RouterModule, ActivatedRoute, ParamMap } from '@angular/router';
import { ServiceService } from '../services/service.service';
import { Subject } from '../models/subject';
import { Student } from '../models/student';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-capnhattaikhoan',
  templateUrl: './capnhattaikhoan.component.html',
  styleUrls: ['./capnhattaikhoan.component.css']
})
export class CapnhattaikhoanComponent  implements OnInit {

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
	selectStudent: Student;
	userLocal = [];
	studentLocal = [];
	userlogin = [];
	resetData = [];
	 
	fmEdit = {
		id: null,
		username: "",
		password: "",
		fullname: "",
		email: "",
		gender: "",
		birthday: "",
	
		marks: 0
	};

	lstUser = [{ "name": "teonv" }, { "name": "pheonv" }, { "name": "nopt" }];
	StudentById = -1;
	showEdit = false;
	isshow = false;
	show = false;
	_submit = false;

	constructor(
		private service: ServiceService,
    private router: ActivatedRoute,
    	private serviceService: ServiceService
	) { }

	ngOnInit() {
		this.getSubject();
		this.login = JSON.parse(localStorage.getItem('Login'));
		this.getlogin();
		this.showTestQuiz();
    
      this.userLocal = JSON.parse(localStorage.getItem('users'));
      this.studentLocal = JSON.parse(localStorage.getItem('students'));
      this.userlogin = JSON.parse(localStorage.getItem('Login'));
      this.showButtonEdit();
    
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

	
  onEdit(student: Student) {
		this.serviceService.onEditStudent(
			student.id, student.username, student.password,
			student.fullname, student.email, student.gender,
			student.birthday,  student.marks
		);
	}
	onSelectST(student: Student) {
		this.selectStudent = student;
	}

	onSelectUS(student: Student) {
		this.isshow = !this.isshow;
		this.fmEdit = {
			id: student.id,
			username: student.username, password: student.password,
			fullname: student.fullname, email: student.email,
			gender: student.gender, birthday: student.birthday,
			 marks: student.marks
		};
		this.StudentById = this.fmEdit.id;
	}
	


	saveUserLocal(id: number) {
		let index = this.userlogin.indexOf(this.userlogin.find(us => us.id === id));
		this.userlogin[index] = Object.assign(this.fmEdit);
		localStorage.setItem("Login", JSON.stringify(this.userlogin));
		this.resetData = this.userLocal.filter(s => s.id !== id);
		localStorage.setItem("users", JSON.stringify(this.userlogin.concat(this.resetData)));
		this.isshow = false;
	}

	onSub(formUser: NgForm) {
		if (formUser.dirty && formUser.touched) {
			alert("Cập Nhật Thông Tin Tài Khoản Thành Công")
		} else {
			alert("Chưa Có Thông Tin Nào Được Thay Đổi")
			return false;
		}
	}

	showButtonEdit() {
		let count = 0;
		if (this.userlogin !== null) {
			for (var i = 0; i < this.userlogin.length; i++) {
				for (var j = 0; j < this.lstUser.length; j++) {
					if (this.userlogin[i].username == this.lstUser[j].name) {
						count++;
					}
				}
			}
		}
		if (count == 0) {
			this.showEdit = true;
		} else {
			this.showEdit = false;
		}
	}


}