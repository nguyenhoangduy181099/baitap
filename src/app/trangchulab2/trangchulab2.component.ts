import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-trangchulab2',
  templateUrl: './trangchulab2.component.html',
  styleUrls: ['./trangchulab2.component.css']
})
export class Trangchulab2Component implements OnInit {

  constructor() { }

  ngOnInit() {}
  
  liststudents = [
    {
      "ID": 1,
      "FirstMidName": "Carson",
      "LastName": "Alexander",
      "EnrollmentDate": "2005-09-01",
      "time": "12:00:00 PM"
    },
    {
      "ID": 2,
      "FirstMidName": "Meredith",
      "LastName": "Alonso",
      "EnrollmentDate": "2002-09-01",
      "time": "13:00:00 PM"
    },
    {
      "ID": 3,
      "FirstMidName": "Arturo",
      "LastName": "Anand",
      "EnrollmentDate": "2003-09-01",
      "time": "15:30:00 PM"
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

