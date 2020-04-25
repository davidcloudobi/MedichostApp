import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { PatientnavbarComponent } from '../patients/patientnavbar/patientnavbar.component';
import { AppointmentsComponent } from '../Appointment/appointments/appointments.component';
import { PatientsComponent } from '../Appointment/patients/patients.component';
import { HomepageComponent } from '../Appointment/homepage/homepage.component';
import { AppointmentDefaultComponent } from '../Appointment/appointment-default/appointment-default.component';
import { DoctorComponent } from '../doctor/doctordashborad/dashboardlayout/dashboard.doctor.component';
import { DashboardComponentComponent } from '../doctor/doctordashborad/dashboard-component.component';

const routes:Routes = [
  { path: "", component: HomepageComponent },
  { path: "doctor", component: DashboardComponentComponent, },
  { path: "appointments", component: AppointmentsComponent },
  { path: "patients", component: PatientsComponent },
  { path: "appointment", component: AppointmentDefaultComponent,}
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class HomeRouter { }


