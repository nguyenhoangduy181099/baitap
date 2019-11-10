import { Component, OnInit, Input, Output } from '@angular/core';
import { RouterModule, ActivatedRoute, ParamMap } from '@angular/router';
import { ServiceService } from '../services/service.service';
import { Subject } from '../models/subject';
import { Student } from '../models/student';
import { NgForm } from '@angular/forms';




import { FormBuilder, FormGroup, Validators,} from '@angular/forms';
import { LocalStorageService } from '../services/local-storage.service';
import { Router,  } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';





@Component({
  selector: 'app-dangky',
  templateUrl: './dangky.component.html',
  styleUrls: ['./dangky.component.css']
})
export class DangkyComponent implements OnInit {
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
  
  student$: Observable<Student[]>;
	students: Student[];
	listUsers = [];
	studentLocal = [];
	_submit = false;
	checkbox = true;
	check = false;;
	id: number = 4;
	username: string = "";
	password: string = "";
	repass: string = "";
	fullname: string = "";
	email: string = "";
	gender: string = "true";
	birthday:string = "";
	marks = 0;


	constructor(
    private serviceService: ServiceService,
		
	
		private service: ServiceService,
    private router: ActivatedRoute,
      
	) { }

	ngOnInit() {
		this.getSubject();
		this.login = JSON.parse(localStorage.getItem('Login'));
		this.getlogin();
		this.showTestQuiz();
    

    this.getUsers();
		this.serviceService.loadLocalStorage();
		this.serviceService.updateLocalStorage();
		this.student$ = this.serviceService.listStudents;
    this.studentLocal = JSON.parse(localStorage.getItem('students'));
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
  this.serviceService.getListUsers().subscribe(data => this.students = data);
    }

onSubmit(formUser: NgForm) {
  let count1 = 0;
  let count2 = 0;
  let count3 = 0;

  for (var i = 0; i < this.students.length; i++) {
    if (this.students[i].username == formUser.value.username) {
      count1++;
    }
  }
  for (var i = 0; i < this.listUsers.length; i++) {
    if (this.listUsers[i].username == formUser.value.username) {
      count2++;
    }
  }
  for (var i = 0; i < this.studentLocal.length; i++) {
    if (this.studentLocal[i].username == formUser.value.username) {
      count3++;
    }
  }

  if (count1 == 0 && count2 == 0 && count3 == 0) {
    this._submit = true;
    this.listUsers.push({
      id: this.id++,
      username: this.username,
      password: this.password,
      fullname: this.fullname,
      email: this.email,
      gender: this.gender,
      birthday: this.birthday,
      marks: this.marks
    });
    this.serviceService.addStudent(
      this.username, this.password, this.fullname, this.email,
      this.gender, this.birthday, this.marks
    );
  }
  else {
    alert('Tên Đăng Nhập Đã Tồn Tại')
  }
}

onSM(formUser: NgForm) {
  if (formUser.value.repass !== formUser.value.password) {
    alert('Mật Khẩu Phải Giống Nhau')
    return false;
  }
}

onReset(formUser: NgForm) {
  formUser.reset();
}

Back() {
  window.history.back();
}
}
