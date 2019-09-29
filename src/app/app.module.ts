import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RouterModule } from '@angular/router';
import{NgxPaginationModule}  from 'ngx-pagination';
import { OrderModule } from 'ngx-order-pipe';
import { AppComponent } from './app.component';
import { TrangchuchinhComponent } from './trangchuchinh/trangchuchinh.component';
import { Tranglab1Component } from './tranglab1/tranglab1.component';
import { Dtlab1Component } from './dtlab1/dtlab1.component';
import { Tranglab4Component } from './tranglab4/tranglab4.component';
import { from } from 'rxjs';
import { Trangchulab5Component } from './trangchulab5/trangchulab5.component';
import { Bai1lab5Component } from './bai1lab5/bai1lab5.component';
import { Trangchulab2Component } from './trangchulab2/trangchulab2.component';
import { Trangchuphu2Component } from './trangchuphu2/trangchuphu2.component';
import { Trangchuphu3Component } from './trangchuphu3/trangchuphu3.component';
import { Lab1bai1Component } from './lab1bai1/lab1bai1.component';
import { Lab1bai2Component } from './lab1bai2/lab1bai2.component';
import { BaitaplonComponent } from './baitaplon/baitaplon.component';
import { DangkyComponent } from './dangky/dangky.component';
import { DangnhapComponent } from './dangnhap/dangnhap.component';
import { QuenmatkhauComponent } from './quenmatkhau/quenmatkhau.component';
import { DoimatkhauComponent } from './doimatkhau/doimatkhau.component';

@NgModule({
  declarations: [
    AppComponent,
    TrangchuchinhComponent,
    Tranglab1Component,
    Dtlab1Component,
    Tranglab4Component,
    Trangchulab5Component,
    Bai1lab5Component,
    Trangchulab2Component,
    Trangchuphu2Component,
    Trangchuphu3Component,
    Lab1bai1Component,
    Lab1bai2Component,
    BaitaplonComponent,
    DangkyComponent,
    DangnhapComponent,
    QuenmatkhauComponent,
    DoimatkhauComponent,
  ],
  imports: [
    BrowserModule,
    NgxPaginationModule,
    OrderModule,
    RouterModule.forRoot([
      { path: '', component: TrangchuchinhComponent },
      { path: 'trangchu', component: TrangchuchinhComponent },
     {path:'lab1',component:Tranglab1Component},
     {path:'dtl01/:id',component:Dtlab1Component},
     {path:'lab1bai1',component:Lab1bai1Component},
     {path:'lab1bai2',component:Lab1bai2Component},
     {path:'lab02',component:Trangchulab2Component},
     {path:'lab002',component:Trangchuphu2Component},
     {path:'lab0002',component:Trangchuphu3Component},
     {path:'lab4',component:Tranglab4Component},
     {path:'lab5',component:Trangchulab5Component},
     {path:'bai1lab5',component:Bai1lab5Component},
     {path:'btl',component:BaitaplonComponent},
     {path:'DK',component:DangkyComponent},
     {path:'DN',component:DangnhapComponent},
     {path:'QMK',component:QuenmatkhauComponent},
     {path:'DMK',component:DoimatkhauComponent}
    ])
  ], 
  providers: [], 
  bootstrap: [AppComponent]
})
export class AppModule { }
