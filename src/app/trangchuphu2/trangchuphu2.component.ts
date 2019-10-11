import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-trangchuphu2',
  templateUrl: './trangchuphu2.component.html',
  styleUrls: ['./trangchuphu2.component.css']
})
export class Trangchuphu2Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  
	liststudents = [
		{
			"ID": 4,
			"FirstMidName": "Gytis",
			"LastName": "Barzdukas",
			"EnrollmentDate": "2002-09-01",
			"time": "12:00:00 PM"
		},
		{
			"ID": 5,
			"FirstMidName": "Yan",
			"LastName": "Li",
			"EnrollmentDate": "2002-09-01",
			"time": "13:00:00 PM"
		},
		{
			"ID": 6,
			"FirstMidName": "Peggy",
			"LastName": "Justice",
			"EnrollmentDate": "2001-09-01",
			"time": "13:00:00 PM"
		}
	];

	delete(id: number) {
		var a = confirm('Are You Sure You Want To Delete ?');
		if (a == true) {
			const index = this.liststudents.findIndex(P => P.ID === id);
			this.liststudents.splice(index, 1);
		} else {
			return false;
		}
	}
}