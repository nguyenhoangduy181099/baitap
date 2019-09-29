import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Tranglab4Component } from './tranglab4.component';

describe('Tranglab4Component', () => {
  let component: Tranglab4Component;
  let fixture: ComponentFixture<Tranglab4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Tranglab4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Tranglab4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
