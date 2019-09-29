import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lab1bai1Component } from './lab1bai1.component';

describe('Lab1bai1Component', () => {
  let component: Lab1bai1Component;
  let fixture: ComponentFixture<Lab1bai1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lab1bai1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lab1bai1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
