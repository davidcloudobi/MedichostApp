import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppointmentDefaultComponent } from './appointment-default.component';

describe('AppointmentDefaultComponent', () => {
  let component: AppointmentDefaultComponent;
  let fixture: ComponentFixture<AppointmentDefaultComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppointmentDefaultComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppointmentDefaultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
