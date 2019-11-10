import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuamatkhauComponent } from './suamatkhau.component';

describe('SuamatkhauComponent', () => {
  let component: SuamatkhauComponent;
  let fixture: ComponentFixture<SuamatkhauComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuamatkhauComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuamatkhauComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
