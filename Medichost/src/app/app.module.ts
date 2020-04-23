import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { DayService, WeekService, WorkWeekService, MonthService, AgendaService ,MonthAgendaService,TimelineViewsService,TimelineMonthService} from '@syncfusion/ej2-angular-schedule';

import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { DashboardComponent } from "./modules/dashboard/dashboard.component";
import { DefaultComponent } from "./layouts/default/default.component";
import { AppRoutingModule } from "./app-routing.module";
import { SidebarComponent } from "./Appointment/sidebar/sidebar.component";
import { HomeComponent } from "./Appointment/home/home.component";
import { AppointmentDefaultComponent } from "./Appointment/appointment-default/appointment-default.component";
import { MaterialModule } from "./material/material.module";
import { AppointmentsComponent } from "./Appointment/appointments/appointments.component";
import { StatsComponent } from "./Appointment/home/stats/stats.component";
import { AppearancesComponent } from "./Appointment/home/appearances/appearances.component";
import { DoctorsComponent } from "./Appointment/home/doctors/doctors.component";
import { GraphComponent } from "./Appointment/home/graph/graph.component";
import { ChartComponent } from "./Appointment/home/chart/chart.component";
import { MatGridListModule } from "@angular/material/grid-list";
import { MatCardModule } from "@angular/material/card";
import { MatMenuModule } from "@angular/material/menu";
import { MatIconModule } from "@angular/material/icon";
import { MatButtonModule } from "@angular/material/button";
import { LayoutModule } from "@angular/cdk/layout";
import { HomepageComponent } from "./Appointment/homepage/homepage.component";
import { ScrollingModule } from "@angular/cdk/scrolling";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { LineChartComponent } from "./shared/widget/line-chart/line-chart.component";
import { HighchartsChartModule } from "highcharts-angular";
import { PieChartComponent } from "./shared/widget/pie-chart/pie-chart.component";
import { TableComponent } from "./Appointment/appointments/table/table.component";
import { MatTableModule } from "@angular/material/table";
import { MatPaginatorModule } from "@angular/material/paginator";
import { MatSortModule } from "@angular/material/sort";
import { DialogTemplateComponent } from "./Appointment/appointments/table/dialog-template/dialog-template.component";
import { DialogService } from './Appointment/appointments/table/dialog.service';

import { MedicoPatientsComponent } from './Appointment/medico-patients/medico-patients.component';
import { PatientsComponent } from './Appointment/patients/patients.component';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { DashboardComponentComponent } from './doctordashborad/dashboard-component.component';
import { FormsModule } from '@angular/forms';
import { DoctorComponent } from "./doctordashborad/dashboardlayout/dashboard.doctor.component"
import {MatToolbarModule} from '@angular/material/toolbar';
import { HttpClientModule } from '@angular/common/http';
import { ScheduleModule } from '@syncfusion/ej2-angular-schedule';
import { MyScheduleComponent } from './doctordashborad/dashboardlayout/scheduler.component';
import { CalendarModule } from '@syncfusion/ej2-angular-calendars';
import { MyCalenderComponent } from './doctordashborad/dashboardlayout/calender.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { SidebarModule, MenuModule } from '@syncfusion/ej2-angular-navigations';
import { ListViewModule } from '@syncfusion/ej2-angular-lists';
import { PatientnavbarComponent } from './patientnavbar/patientnavbar.component';


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    DefaultComponent,
    SidebarComponent,
    HomeComponent,
    AppointmentDefaultComponent,
    AppointmentsComponent,
    StatsComponent,
    AppearancesComponent,
    DoctorsComponent,
    GraphComponent,
    ChartComponent,
    HomepageComponent,
    LineChartComponent,
    PieChartComponent,
    TableComponent,
    DialogTemplateComponent,

    MedicoPatientsComponent,
    PatientsComponent,

    DashboardComponentComponent,
    DoctorComponent,
    MyScheduleComponent,
    MyCalenderComponent ,
    PatientnavbarComponent 
  ],
  entryComponents: [DialogTemplateComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MaterialModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    LayoutModule,
    ScrollingModule,
    MatFormFieldModule,
    MatInputModule,
    HighchartsChartModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    FontAwesomeModule,
    FormsModule,
    MatToolbarModule,
    HttpClientModule,
    ScheduleModule,
    CalendarModule,
    MatSidenavModule,
    MatListModule,
    SidebarModule,
    MenuModule,
    ListViewModule
  ],

  providers: [DialogService, DayService, WeekService, WorkWeekService, MonthService, AgendaService, MonthAgendaService, TimelineViewsService, TimelineMonthService],
  bootstrap: [AppComponent],
})
export class AppModule {}
