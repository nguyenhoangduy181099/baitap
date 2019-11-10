import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SanphamguitarComponent } from './sanphamguitar.component';

describe('SanphamguitarComponent', () => {
  let component: SanphamguitarComponent;
  let fixture: ComponentFixture<SanphamguitarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SanphamguitarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SanphamguitarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
