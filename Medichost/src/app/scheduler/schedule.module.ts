import { NgModule } from "@angular/core";
import { SharedModules } from "../shared/widget/shared.module";
import { SchedulerRouter } from "./schedule.routes";
import { AppointmentCreateComponent } from "./appointmentCreate/appointmentCreate.component";
import { AppointmentListComponent } from "./appointmentList/appointmentList.component";
import { WaitingListResolver } from "src/resolvers/schedule/waitingList.resolver";
import { WaitingPatientsComponent } from './waitingPatients/waitingPatients.component';

@NgModule({
  imports: [SharedModules, SchedulerRouter],
  declarations: [AppointmentCreateComponent, AppointmentListComponent, WaitingPatientsComponent],
  providers: [WaitingListResolver],
})
export class SchedulerModule {}
