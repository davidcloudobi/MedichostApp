import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { AppointmentCreateComponent } from './appointmentCreate/appointmentCreate.component';
import { AppointmentListComponent } from './appointmentList/appointmentList.component';

const routes:Routes = [
 { path: "create", component: AppointmentCreateComponent },
 { path: "waiting", component: AppointmentListComponent }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class SchedulerRouter { }
