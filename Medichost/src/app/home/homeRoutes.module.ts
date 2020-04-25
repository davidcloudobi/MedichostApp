import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { PatientnavbarComponent } from '../patients/patientnavbar/patientnavbar.component';
import { AppointmentsComponent } from '../Appointment/appointments/appointments.component';
import { PatientsComponent } from '../Appointment/patients/patients.component';
import { HomepageComponent } from '../Appointment/homepage/homepage.component';
import { AppointmentDefaultComponent } from '../Appointment/appointment-default/appointment-default.component';
import { DefaultComponent } from './layouts/default/default.component';
import { DoctorComponent } from '../doctor/doctordashborad/dashboardlayout/dashboard.doctor.component';

const routes:Routes = [
  {path: "", component: DefaultComponent, },
  {path: "doctor", component: DoctorComponent, },
  { path: "patient/details", component: PatientnavbarComponent,},
  { path: "appointments", component: AppointmentsComponent },
  { path: "patients", component: PatientsComponent },
  { path: "home", component: HomepageComponent },
  { path: "appointment", component: AppointmentDefaultComponent,}
]

/*
path: "dashboard",
component: DefaultComponent,
children: [
  {
    path: "doctor",
    component: DoctorComponent ,
  },
],
},
{
path: "patient",
component: DefaultComponent,
children: [
  {
    path: "details",
    component: PatientnavbarComponent,
  },
],
},
{
path: "appointment",
component: AppointmentDefaultComponent,
children: [
  { path: "", component: HomepageComponent },
  { path: "appointments", component: AppointmentsComponent },
  { path: "patients", component: PatientsComponent },
],
}
*/
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class HomeRouter { }


