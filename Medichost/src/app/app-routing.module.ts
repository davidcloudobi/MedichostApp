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

const routes: Routes = [
    //{path: 'appointments', loadChildren: () => import('./appointment/appointment.module').then(m => m.AppointmentModule)},
  {path: 'doctor', loadChildren: () => import('./doctor/doctor.module').then(m => m.DoctorModule)},

  {path:'auth', loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)},
  { path: 'schedule', loadChildren: () => import('./scheduler/schedule.module').then(m => m.SchedulerModule)},
  { path: 'patients', loadChildren: () => import('./scheduler/schedule.module').then(m => m.SchedulerModule) },
  { path: 'patient', loadChildren: () => import('./patients/patients.module').then(m => m.SchedulerModule)},
  { path: 'error', loadChildren: () => import('./scheduler/schedule.module').then(m => m.SchedulerModule)},
  { path: "**", component: DashboardComponent },


 
  {
    path: "appointment",
    component: AppointmentDefaultComponent,
    children: [
      { path: "", component: HomepageComponent },
      { path: "appointments", component: AppointmentsComponent },
      { path: "patients", component: PatientsComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
