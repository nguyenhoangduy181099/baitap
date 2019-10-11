import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DephimComponent } from './dephim.component';

describe('DephimComponent', () => {
  let component: DephimComponent;
  let fixture: ComponentFixture<DephimComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DephimComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DephimComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
