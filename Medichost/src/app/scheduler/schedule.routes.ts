import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { AppointmentCreateComponent } from './appointmentCreate/appointmentCreate.component';
import { AppointmentListComponent } from './appointmentList/appointmentList.component';
import { WaitingListResolver } from 'src/resolvers/schedule/waitingList.resolver';
import { DoctorDetailResolver } from 'src/resolvers/schedule/doctorDetail.resolver';

const routes:Routes = [
 { path: "create", component: AppointmentCreateComponent },
 { path: "waiting", component: AppointmentListComponent, resolve: { appointmentList: WaitingListResolver, doctorDetail: DoctorDetailResolver} }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class SchedulerRouter { }
