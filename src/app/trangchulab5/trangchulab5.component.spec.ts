import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Trangchulab5Component } from './trangchulab5.component';

describe('Trangchulab5Component', () => {
  let component: Trangchulab5Component;
  let fixture: ComponentFixture<Trangchulab5Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Trangchulab5Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Trangchulab5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
