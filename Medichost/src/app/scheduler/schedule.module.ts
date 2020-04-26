import { NgModule } from "@angular/core";
import { SharedModules } from "../shared/widget/shared.module";
import { SchedulerRouter } from "./schedule.routes";
import { AppointmentCreateComponent } from "./appointmentCreate/appointmentCreate.component";
import { AppointmentListsComponent } from "./appointmentList/appointmentList.component";
import { WaitingListResolver } from "src/resolvers/schedule/waitingList.resolver";
import { WaitingPatientsComponent } from "./waitingPatients/waitingPatients.component";
import { ScheduleNavComponent } from "./schedule-nav/schedule-nav.component";
import { NewPatientComponent } from './new-patient/new-patient.component';
import { BookAppointmentComponent } from './book-appointment/book-appointment.component';
import { SearchPatientComponent } from './search-patient/search-patient.component';
import { SearchResultComponent } from './search-result/search-result.component';
import { AppointmentListComponent } from './appointment-list/appointment-list.component';

@NgModule({
  imports: [SharedModules, SchedulerRouter],
  declarations: [
    AppointmentCreateComponent,
    AppointmentListsComponent,
    WaitingPatientsComponent,
    ScheduleNavComponent,
    NewPatientComponent,
    BookAppointmentComponent,
    SearchPatientComponent,
    SearchResultComponent,
    AppointmentListComponent,
  ],
  providers: [WaitingListResolver],
})
export class SchedulerModule {}
