import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppRouter } from "./app.routes";
import { NewPatientComponent } from './scheduler/new-patient/new-patient.component';
import { BookAppointmentComponent } from './scheduler/book-appointment/book-appointment.component';
import { SearchPatientComponent } from './scheduler/search-patient/search-patient.component';
import { SearchResultComponent } from './scheduler/search-result/search-result.component';
import { AppointmentListComponent } from './scheduler/appointment-list/appointment-list.component';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRouter
  ],
  bootstrap: [ AppComponent ],
})

export class AppModule {}
