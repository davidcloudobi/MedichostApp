import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppRouter } from "./app.routes";
import { AngularMaterialsModules } from './shared/materialsModule/material_module';
import { MaterialModule } from './shared/material/material.module';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { PatientDashBoardComponent } from './dentalpatients/patients-dashboard/patients.component';
import { FormsModule } from '@angular/forms';
import { PatientnavbarComponent } from './dentalpatients/patientnavbar.component';
import { PatientDetailsHeaderComponent } from './dentalpatients/patientdetailsheader.component';
import { PatientsComponent } from './Appointment/patients/patients.component';
import { CalendarModule } from '@syncfusion/ej2-angular-calendars';
import { SidebarComponent, SidebarModule } from '@syncfusion/ej2-angular-navigations';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    AppComponent,
    PatientDashBoardComponent,
    PatientnavbarComponent,
    PatientDetailsHeaderComponent,
   
  ],
  imports: [

    BrowserModule,
    BrowserAnimationsModule,
    AppRouter,
    FontAwesomeModule,
    FormsModule,
    AngularMaterialsModules,
    MaterialModule,
    CalendarModule,
    SidebarModule,
    HttpClientModule
  ],
  bootstrap: [ AppComponent ],
})

export class AppModule {}
