import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-trangchuphu3',
  templateUrl: './trangchuphu3.component.html',
  styleUrls: ['./trangchuphu3.component.css']
})
export class Trangchuphu3Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  liststudents = [
		{
			"ID": 7,
			"FirstMidName": "Laura",
			"LastName": "Norman",
			"EnrollmentDate": "2003-09-01",
			"time": "12:00:00 PM"
		},
		{
			"ID": 8,
			"FirstMidName": "Nino",
			"LastName": "Olivetto",
			"EnrollmentDate": "2005-09-01",
			"time": "13:00:00 PM"
		}
	];
}