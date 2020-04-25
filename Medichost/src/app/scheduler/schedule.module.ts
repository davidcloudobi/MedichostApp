import { NgModule } from "@angular/core";
import { SharedModules } from '../shared/widget/shared.module';
import { SchedulerRouter } from './scheduleRoutes.module';
import { AppointmentCreateComponent } from './appointmentCreate/appointmentCreate.component';
import { AppointmentListComponent } from './appointmentList/appointmentList.component';

@NgModule({

  imports: [
    SharedModules,
    SchedulerRouter,
  ],
  declarations: [ AppointmentCreateComponent, AppointmentListComponent],
  providers: [],
})
export class SchedulerModule {}
