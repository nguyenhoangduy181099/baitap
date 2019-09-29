import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-trangchulab2',
  templateUrl: './trangchulab2.component.html',
  styleUrls: ['./trangchulab2.component.css']
})
export class Trangchulab2Component implements OnInit {

  constructor() { }

  ngOnInit() {}
  title=Trangchulab2Component;
  TC=
  [
    {"ID":1,"FirstName":"Carson","LastName":"Alexander","EnrollDate":  "2005-09-01"},    
    {"ID":2,"FirstName":"Meredith","LastName":"Alonso","EnrollDate" : "2002-09-01"},         
    {"ID":3,"FirstName":"Arturo","LastName":"Anand","EnrollDate":  "2003-09-01"}, 
    
  ]

  removeTC(ID: number){
    const index =this.TC.findIndex(TC =>TC.ID ===ID);
     this.TC.splice(index,1);
     alert("ban muon xoa");
  }
}

