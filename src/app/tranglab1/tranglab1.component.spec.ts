import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Tranglab1Component } from './tranglab1.component';

describe('Tranglab1Component', () => {
  let component: Tranglab1Component;
  let fixture: ComponentFixture<Tranglab1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Tranglab1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Tranglab1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
