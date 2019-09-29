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
  title= Trangchuphu3Component;
  TC=
  [
{"ID":7,"FirstName":"Laura","LastName":"Norman","EnrollDate":"2003-09-01"},  
  {"ID":8,"FirstName":"Nino","LastName":"Olivetto","EnrollDate":"2005-09-01"}

  ]

  removeTC(ID: number){
    const index =this.TC.findIndex(TC =>TC.ID ===ID);
     this.TC.splice(index,1);
     alert("ban muon xoa");
  }
}
