import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RouterModule } from '@angular/router';
import{NgxPaginationModule}  from 'ngx-pagination';
import { OrderModule } from 'ngx-order-pipe';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { ServiceService } from './services/service.service';



import { TrangchuchinhComponent } from './trangchuchinh/trangchuchinh.component';
import { Tranglab1Component } from './tranglab1/tranglab1.component';
import { Dtlab1Component } from './dtlab1/dtlab1.component';
import { Tranglab4Component } from './tranglab4/tranglab4.component';
import { from } from 'rxjs';
import{HttpClientModule} from '@angular/common/http';
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
import { Lab5Component } from './lab5/lab5.component';
import { DlStudentComponent } from './dl-student/dl-student.component';
import { PhimComponent } from './phim/phim.component';
import { DephimComponent } from './dephim/dephim.component';
import { StdDetailComponent } from './std-detail/std-detail.component';
import { HcnComponent } from './hcn/hcn.component';
import { TihtienthndComponent } from './tihtienthnd/tihtienthnd.component';
import { BanhangComponent } from './banhang/banhang.component';
import { ThuongtetComponent } from './thuongtet/thuongtet.component';
import { MuabanComponent } from './muaban/muaban.component';

import { SanphamguitarComponent } from './sanphamguitar/sanphamguitar.component';
import { SuamatkhauComponent } from './suamatkhau/suamatkhau.component';

import { CapnhattaikhoanComponent } from './capnhattaikhoan/capnhattaikhoan.component';
import { SuataikhoanComponent } from './suataikhoan/suataikhoan.component';
import { AppRoutingModule } from './app-routing.module';
import { ThunghiemComponent } from './thunghiem/thunghiem.component';
import { DanhsachmonComponent } from './danhsachmon/danhsachmon.component';
import { ThiComponent } from './thi/thi.component';

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
    Lab5Component,
    DlStudentComponent,
    PhimComponent,
    DephimComponent,
    StdDetailComponent,
    HcnComponent,
    TihtienthndComponent,
    BanhangComponent,
    ThuongtetComponent,
    MuabanComponent,
    
    SanphamguitarComponent,
    
    SuamatkhauComponent,
    
    
    
    CapnhattaikhoanComponent,
    
    SuataikhoanComponent,
    
    ThunghiemComponent,
    
    DanhsachmonComponent,
    
    ThiComponent,
    
  
  ],
  imports: [
    BrowserModule,
    NgxPaginationModule,
    FormsModule,
    OrderModule,
    HttpClientModule,
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
     {path:'dllab/:ID',component:StdDetailComponent},
     {path:'dllab2/:ID',component:StdDetailComponent},
     {path:'dllab3/:ID',component:StdDetailComponent},
     {path:'lab4',component:Tranglab4Component},
     {path:'lab5',component:Trangchulab5Component},
     {path:'hcn',component:HcnComponent},
     {path:'tienthuong',component:TihtienthndComponent},
     {path:'banhang',component:BanhangComponent},
     {path:'thuongtet',component:ThuongtetComponent},
     {path:'lab05',component:Lab5Component},
     {path:'bai1lab5',component:Bai1lab5Component},
     {path:'btl',component:BaitaplonComponent},
     {path:'DK',component:DangkyComponent},
     {path:'DN',component:DangnhapComponent},
     {path:'QMK',component:QuenmatkhauComponent},
     {path:'DMK',component:DoimatkhauComponent},
     {path:'Dl',component:DlStudentComponent},
     {path:'phim',component:PhimComponent},
    {path:'muaban',component:MuabanComponent},
    {path:'sanpham-guitar',component:SanphamguitarComponent},
    {path:'smk',component:SuamatkhauComponent},
    {path:'cntk',component:CapnhattaikhoanComponent},
    {path:'stk',component:SuamatkhauComponent},
    {path:'tn',component:ThunghiemComponent},
    {path:'dsm',component:DanhsachmonComponent},
    {path:'thi',component:ThiComponent},
]),
    AppRoutingModule
  ], 
  providers: [], 
  bootstrap: [AppComponent]
})
export class AppModule { }
