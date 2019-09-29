import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Dtlab1Component } from './dtlab1.component';

describe('Dtlab1Component', () => {
  let component: Dtlab1Component;
  let fixture: ComponentFixture<Dtlab1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Dtlab1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Dtlab1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
