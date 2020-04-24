import { NgModule } from "@angular/core";

import { Routes, RouterModule } from "@angular/router";
import { DashboardComponent } from "./modules/dashboard/dashboard.component";
import { DefaultComponent } from "./layouts/default/default.component";
import { AppointmentDefaultComponent } from "./Appointment/appointment-default/appointment-default.component";
import { SidebarComponent } from "./Appointment/sidebar/sidebar.component";
import { HomeComponent } from "./Appointment/home/home.component";
import { AppointmentsComponent } from "./Appointment/appointments/appointments.component";
import { HomepageComponent } from "./Appointment/homepage/homepage.component";

import { MedicoPatientsComponent } from "./Appointment/medico-patients/medico-patients.component";
import { PatientsComponent } from "./Appointment/patients/patients.component";

import { DoctorComponent } from './doctordashborad/dashboardlayout/dashboard.doctor.component';
import { LoginComponent } from './login/login.component';
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';
import { SignupComponent } from './signup/signup.component';
import { PatientnavbarComponent } from './patientnavbar/patientnavbar.component';
const routes: Routes = [
  {
    path: "",
    component: DefaultComponent,
    children: [
      {
        path: "dashboard",
        component: DashboardComponent,
      },
    ],
  },
  {
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
  },
  {
    path:"login",
    component:LoginComponent
  },
  {
    path:"forgetpassword",
    component:ForgotpasswordComponent
  },
  {
    path:"signup",
    component:SignupComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
