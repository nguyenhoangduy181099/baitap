import { Component, OnInit } from '@angular/core';
import{HttpClient} from '@angular/common/http';
@Component({
  selector: 'app-phim',
  templateUrl: './phim.component.html',
  styleUrls: ['./phim.component.css']
})
export class PhimComponent implements OnInit {
url='https://swapi.co/api/films/';
infoFilm:any;
listFilms:any;
constructor(private http:HttpClient){}

  ngOnInit() {
this.getAllFilm().subscribe(data=>{
  this.infoFilm=data;
  this.listFilms=this.infoFilm.result;

})
  }
  getAllFilm()
  {return this.http.get(this.url);
  }
}
