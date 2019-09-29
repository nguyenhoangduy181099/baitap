import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Trangchuphu2Component } from './trangchuphu2.component';

describe('Trangchuphu2Component', () => {
  let component: Trangchuphu2Component;
  let fixture: ComponentFixture<Trangchuphu2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Trangchuphu2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Trangchuphu2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
