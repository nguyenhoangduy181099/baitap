import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-std-detail',
  templateUrl: './std-detail.component.html',
  styleUrls: ['./std-detail.component.css']
})
export class StdDetailComponent implements OnInit {
  students: any;
	sid;
	enroll = [];
	course = [];
	arr = [];

	liststudents = [
	{
		"ID": 1,
		"FirstMidName": "Carson",
		"LastName": "Alexander",
		"EnrollmentDate": "2005-09-01",
		"time": "12:00:00 PM",
		"Title": "Calculus",
		"Grade": "A",
		"Credits": 4
	},
	{
		"ID": 2,
		"FirstMidName": "Meredith",
		"LastName": "Alonso",
		"EnrollmentDate": "2002-09-01",
		"time": "13:00:00 PM",
		"Title": "Literature",
		"Grade": "A",
		"Credits": 4
	},
	{
		"ID": 3,
		"FirstMidName": "Arturo",
		"LastName": "Anand",
		"EnrollmentDate": "2003-09-01",
		"time": "15:30:00 PM",
		"Title": "Composition",
		"Grade": "A",
		"Credits": 3
	},
	{
		"ID": 4,
		"FirstMidName": "Gytis",
		"LastName": "Barzdukas",
		"EnrollmentDate": "2002-09-01",
		"time": "12:00:00 PM",
		"Title": "DjAngo",
		"Grade": "F",
		"Credits": 4
	},
	{
		"ID": 5,
		"FirstMidName": "Yan",
		"LastName": "Li",
		"EnrollmentDate": "2002-09-01",
		"time": "13:00:00 PM",
		"Title": "Calculus",
		"Grade": "B",
		"Credits": 4
	},
	{
		"ID": 6,
		"FirstMidName": "Peggy",
		"LastName": "Justice",
		"EnrollmentDate": "2001-09-01",
		"Title": "Macroeconomics",
		"Grade": "B",
		"Credits": 3
	},
	{
		"ID": 7,
		"FirstMidName": "Laura",
		"LastName": "Norman",
		"EnrollmentDate": "2003-09-01",
		"time": "12:00:00 PM",
		"Title": "Python",
		"Grade": "C",
		"Credits": 3
	},
	{
		"ID": 8,
		"FirstMidName": "Nino",
		"LastName": "Olivetto",
		"EnrollmentDate": "2005-09-01",
		"time": "13:00:00 PM",
		"Title": "Chemistry",
		"Grade": "A",
		"Credits": 3
	}
	];

	courses = [
	{ "CourseID": 1050, "Title": "Chemistry", "Credits": 3,},
	{ "CourseID": 4022, "Title": "Python", "Credits": 3, },
	{ "CourseID": 4041, "Title": "Macroeconomics", "Credits": 3,},
	{ "CourseID": 1045, "Title": "Calculus", "Credits": 4, },
	{ "CourseID": 3141, "Title": "DjAngo", "Credits": 4, },
	{ "CourseID": 2021, "Title": "Composition", "Credits": 3,},
	{ "CourseID": 2042, "Title": "Literature", "Credits": 4,}
	];

	enrollments = [
	{ "StudentID": 1, "CourseID": 1050, "Grade": "A"},
	{ "StudentID": 1, "CourseID": 4022, "Grade": "C"},
	{ "StudentID": 1, "CourseID": 4041, "Grade": "B"},
	{ "StudentID": 2, "CourseID": 1045, "Grade": "B"},
	{ "StudentID": 2, "CourseID": 3141, "Grade": "F"},
	{ "StudentID": 2, "CourseID": 2021, "Grade": "F"},
	{ "StudentID": 3, "CourseID": 1050, "Grade": "B"},
	{ "StudentID": 4, "CourseID": 1050, "Grade": "B"},
	{ "StudentID": 4, "CourseID": 4022, "Grade": "F"},
	{ "StudentID": 5, "CourseID": 4041, "Grade": "C"},
	{ "StudentID": 6, "CourseID": 1045, "Grade": "B"},
	{ "StudentID": 6, "CourseID": 3141, "Grade": "A"},
	];


	constructor(
		private rout: ActivatedRoute,
		private rout2: ActivatedRoute,
		) { }

	ngOnInit() {
		this.rout.paramMap.subscribe(para => { this.sid = +para.get('ID') });
		this.students = this.liststudents.find(std => std.ID === this.sid);
		this.enroll = this.enrollments.filter(e => e.StudentID === this.sid);

		for (let en of this.enroll) {
			this.course.push(en.CourseID);
		};

		for (let i = 0; i < this.course.length; i++) {
			this.arr.push(this.courses.find(c => c.CourseID === this.course[i]));
		};
	}

	Back() {
		window.history.back();
	}

}