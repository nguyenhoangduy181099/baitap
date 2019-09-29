import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Trangchulab2Component } from './trangchulab2.component';

describe('Trangchulab2Component', () => {
  let component: Trangchulab2Component;
  let fixture: ComponentFixture<Trangchulab2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Trangchulab2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Trangchulab2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
