import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StdDetailComponent } from './std-detail.component';

describe('StdDetailComponent', () => {
  let component: StdDetailComponent;
  let fixture: ComponentFixture<StdDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StdDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StdDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
