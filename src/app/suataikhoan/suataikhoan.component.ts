import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Student } from '../models/student';
import { FormGroup, NgForm } from '@angular/forms';
import { ServiceService } from '../services/service.service';

@Component({
  selector: 'app-suataikhoan',
  templateUrl: './suataikhoan.component.html',
  styleUrls: ['./suataikhoan.component.css']
})
export class SuataikhoanComponent implements OnInit {

  
	@Input() student: Student;
	@Output() editStudent: EventEmitter<Student> = new EventEmitter<Student>();
	userlogin = [];
	_submit = false;

	constructor() { }

	ngOnInit() {

	}

	submitEdit(formStudent: NgForm) {
		this._submit = true;
		if (formStudent.dirty && formStudent .touched) {
			this.editStudent.emit(this.student);
			alert("Cập Nhật Thông Tin Tài Khoản Thành Công");
		} else {
			alert("Chưa Có Thông Tin Nào Được Thay Đổi")
			return false;
		}
	}
} 