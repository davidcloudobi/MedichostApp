import { NgModule } from "@angular/core";

import { Routes, RouterModule } from "@angular/router";
import { DashboardComponent } from "./home/dashboard/dashboard.component";

const routes: Routes = [
    //{path: 'appointments', loadChildren: () => import('./appointment/appointment.module').then(m => m.AppointmentModule)},
    { path: 'home',     loadChildren: () => import('./home/home.module').then(m => m.HomeModule)},
    { path: 'auth',     loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)},
    { path: 'schedule', loadChildren: () => import('./scheduler/schedule.module').then(m => m.SchedulerModule)},
    { path: 'patients', loadChildren: () => import('./scheduler/schedule.module').then(m => m.SchedulerModule)},
    { path: 'error',    loadChildren: () => import('./scheduler/schedule.module').then(m => m.SchedulerModule)},
    { path: "**",       component: DashboardComponent },

  /*
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
  */
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
