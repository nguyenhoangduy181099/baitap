import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThuongtetComponent } from './thuongtet.component';

describe('ThuongtetComponent', () => {
  let component: ThuongtetComponent;
  let fixture: ComponentFixture<ThuongtetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThuongtetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThuongtetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
