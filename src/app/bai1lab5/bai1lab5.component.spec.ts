import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Bai1lab5Component } from './bai1lab5.component';

describe('Bai1lab5Component', () => {
  let component: Bai1lab5Component;
  let fixture: ComponentFixture<Bai1lab5Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Bai1lab5Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Bai1lab5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
