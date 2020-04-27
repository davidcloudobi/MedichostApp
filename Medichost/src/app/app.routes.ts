import { NgModule } from "@angular/core";

import { Routes, RouterModule } from "@angular/router";
import { DashboardComponent } from "./home/dashboard/dashboard.component";

const routes: Routes = [
    { path: 'home',     loadChildren: () => import('./home/home.module').then(m => m.HomeModule)},
    { path: 'auth',     loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)},
    { path: 'schedule', loadChildren: () => import('./scheduler/schedule.module').then(m => m.SchedulerModule)},
    { path: 'patients', loadChildren: () => import('./patients/patients.module').then(m => m.PatientsModule) },
    { path: 'error',    loadChildren: () => import('./fallbacks/fallbacks.module').then(m => m.FallbackModule)},
    { path: "**",       component: DashboardComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRouter {}

