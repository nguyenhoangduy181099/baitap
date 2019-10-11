import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HcnComponent } from './hcn.component';

describe('HcnComponent', () => {
  let component: HcnComponent;
  let fixture: ComponentFixture<HcnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HcnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HcnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
