import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TihtienthndComponent } from './tihtienthnd.component';

describe('TihtienthndComponent', () => {
  let component: TihtienthndComponent;
  let fixture: ComponentFixture<TihtienthndComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TihtienthndComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TihtienthndComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
