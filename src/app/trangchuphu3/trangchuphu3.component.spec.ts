import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Trangchuphu3Component } from './trangchuphu3.component';

describe('Trangchuphu3Component', () => {
  let component: Trangchuphu3Component;
  let fixture: ComponentFixture<Trangchuphu3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Trangchuphu3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Trangchuphu3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
