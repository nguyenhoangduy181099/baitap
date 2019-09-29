import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BaitaplonComponent } from './baitaplon.component';

describe('BaitaplonComponent', () => {
  let component: BaitaplonComponent;
  let fixture: ComponentFixture<BaitaplonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BaitaplonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BaitaplonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
