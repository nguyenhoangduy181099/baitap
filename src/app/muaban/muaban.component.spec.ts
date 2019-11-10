import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MuabanComponent } from './muaban.component';

describe('MuabanComponent', () => {
  let component: MuabanComponent;
  let fixture: ComponentFixture<MuabanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MuabanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MuabanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
