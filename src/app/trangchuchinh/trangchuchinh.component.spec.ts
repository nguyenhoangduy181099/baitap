import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrangchuchinhComponent } from './trangchuchinh.component';

describe('TrangchuchinhComponent', () => {
  let component: TrangchuchinhComponent;
  let fixture: ComponentFixture<TrangchuchinhComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrangchuchinhComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrangchuchinhComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
