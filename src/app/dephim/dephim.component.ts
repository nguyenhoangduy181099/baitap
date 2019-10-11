import { Component, OnInit } from '@angular/core';
import{ActivatedRoute} from '@angular/router';
import {HttpClient} from '@angular/common/http'
import { from } from 'rxjs';
@Component({
  selector: 'app-dephim',
  templateUrl: './dephim.component.html',
  styleUrls: ['./dephim.component.css']
})
export class DephimComponent implements OnInit {
film:any;
  constructor(private router:ActivatedRoute,private http:HttpClient) { }

  ngOnInit() {
    const url=this.router.snapshot.paramMap.get('url');
    this.getFilmById(url).subscribe(data=>{
      this.film=data;
    })
    
    }
    
    getFilmById(url:string){
      return this.http.get(url);
    }
    }
    