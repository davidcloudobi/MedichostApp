import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { DoctorComponent } from '../doctordashborad/dashboardlayout/dashboard.doctor.component';

const routes:Routes = [
  { path:"dashboard", component: DoctorComponent  },
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class DoctorRouter { }
