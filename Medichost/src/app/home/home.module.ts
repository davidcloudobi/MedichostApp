import { NgModule } from "@angular/core";
import { DashboardComponent } from './dashboard/dashboard.component';
import { DefaultComponent } from './layouts/default/default.component';
import { SidebarComponent } from '../Appointment/sidebar/sidebar.component';
import { HomeComponent } from '../Appointment/home/home.component';
import { AppointmentDefaultComponent } from '../Appointment/appointment-default/appointment-default.component';
import { AppointmentsComponent } from '../Appointment/appointments/appointments.component';
import { StatsComponent } from '../Appointment/home/stats/stats.component';
import { AppearancesComponent } from '../Appointment/home/appearances/appearances.component';
import { DoctorsComponent } from '../Appointment/home/doctors/doctors.component';
import { GraphComponent } from '../Appointment/home/graph/graph.component';
import { ChartComponent } from '../Appointment/home/chart/chart.component';
import { HomepageComponent } from '../Appointment/homepage/homepage.component';
import { LineChartComponent } from '../shared/widget/line-chart/line-chart.component';
import { PieChartComponent } from '../shared/widget/pie-chart/pie-chart.component';
import { TableComponent } from '../Appointment/appointments/table/table.component';
import { DialogTemplateComponent } from '../Appointment/appointments/table/dialog-template/dialog-template.component';
import { MedicoPatientsComponent } from '../Appointment/medico-patients/medico-patients.component';
import { PatientsComponent } from '../Appointment/patients/patients.component';
import { PatientnavbarComponent } from '../patients/patientnavbar/patientnavbar.component';
import { SharedModules } from '../shared/widget/shared.module';
import { DialogService } from '../Appointment/appointments/table/dialog.service';
import { DayService, WeekService, WorkWeekService, MonthService, AgendaService, MonthAgendaService, TimelineViewsService, TimelineMonthService } from '@syncfusion/ej2-angular-schedule';
import { DashboardComponentComponent } from '../doctor/doctordashborad/dashboard-component.component';
import { DoctorComponent } from '../doctor/doctordashborad/dashboardlayout/dashboard.doctor.component';
import { MyScheduleComponent } from '../doctor/doctordashborad/dashboardlayout/scheduler.component';
import { MyCalenderComponent } from '../doctor/doctordashborad/dashboardlayout/calender.component';
import { HomeRouter } from './home.routes';
import { CommonModule } from '@angular/common';


@NgModule({
  declarations: [
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
    MyCalenderComponent,

    PatientnavbarComponent
  ],
  entryComponents: [DialogTemplateComponent],
  imports: [
    CommonModule,
    SharedModules,
    HomeRouter,
  ],
  providers: [DialogService, DayService, WeekService, WorkWeekService, MonthService, AgendaService, MonthAgendaService, TimelineViewsService, TimelineMonthService],
})
export class HomeModule {}
