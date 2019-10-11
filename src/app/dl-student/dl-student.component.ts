import { Component, OnInit } from '@angular/core';
import {Student} from './Student';


@Component({
  selector: 'app-dl-student',
  templateUrl: './dl-student.component.html',
  styleUrls: ['./dl-student.component.css']
})
export class DlStudentComponent implements OnInit {
 fromStudent ={
 id:0,
 fullName:'',
 birthday:new Date().toISOString().substring(0,10),
 mark:0,
};
 students: Student[]=[
   {
   id:1,
   fullName:'Nguyễn Văn Tèo',
   birthday:new Date(2019,6,30),
   mark:8

 },
 {
  id:2,
  fullName:'Phan Thị Nở',
  birthday:new Date(2019,2,29),
  mark:8
 }
]
  constructor() { }

  ngOnInit() {  }

}