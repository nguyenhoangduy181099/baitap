import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DlStudentComponent } from './dl-student.component';

describe('DlStudentComponent', () => {
  let component: DlStudentComponent;
  let fixture: ComponentFixture<DlStudentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DlStudentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DlStudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
