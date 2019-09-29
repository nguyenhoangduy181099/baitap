import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lab1bai2Component } from './lab1bai2.component';

describe('Lab1bai2Component', () => {
  let component: Lab1bai2Component;
  let fixture: ComponentFixture<Lab1bai2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lab1bai2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lab1bai2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
