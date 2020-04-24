import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicoPatientsComponent } from './medico-patients.component';

describe('MedicoPatientsComponent', () => {
  let component: MedicoPatientsComponent;
  let fixture: ComponentFixture<MedicoPatientsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MedicoPatientsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MedicoPatientsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
