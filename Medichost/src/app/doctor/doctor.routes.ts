import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DoctorComponent } from './doctordashborad/dashboardlayout/dashboard.doctor.component';
const routes:Routes = [
 
  
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class DoctorRouter { }


