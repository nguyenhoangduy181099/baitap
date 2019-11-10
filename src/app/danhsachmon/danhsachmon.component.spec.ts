import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DanhsachmonComponent } from './danhsachmon.component';

describe('DanhsachmonComponent', () => {
  let component: DanhsachmonComponent;
  let fixture: ComponentFixture<DanhsachmonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DanhsachmonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DanhsachmonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
