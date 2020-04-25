import { DashboardComponent } from "./modules/dashboard/dashboard.component";
import { DefaultComponent } from "./layouts/default/default.component";
import { SidebarComponent } from "./Appointment/sidebar/sidebar.component";
import { HomeComponent } from "./Appointment/home/home.component";
import { AppointmentDefaultComponent } from "./Appointment/appointment-default/appointment-default.component";
import { AppointmentsComponent } from "./Appointment/appointments/appointments.component";
import { StatsComponent } from "./Appointment/home/stats/stats.component";
import { AppearancesComponent } from "./Appointment/home/appearances/appearances.component";
import { DoctorsComponent } from "./Appointment/home/doctors/doctors.component";
import { GraphComponent } from "./Appointment/home/graph/graph.component";
import { ChartComponent } from "./Appointment/home/chart/chart.component";
import { HomepageComponent } from "./Appointment/homepage/homepage.component";
import { LineChartComponent } from "./shared/widget/line-chart/line-chart.component";
import { PieChartComponent } from "./shared/widget/pie-chart/pie-chart.component";
import { TableComponent } from "./Appointment/appointments/table/table.component";

import { MedicoPatientsComponent } from "./Appointment/medico-patients/medico-patients.component";
import { PatientsComponent } from "./Appointment/patients/patients.component";
import { DoctorComponent } from "./doctordashborad/dashboardlayout/dashboard.doctor.component";
import { DashboardComponentComponent } from "./doctordashborad/dashboard-component.component";

import { MyScheduleComponent } from "./doctordashborad/dashboardlayout/scheduler.component";
import { MyCalenderComponent } from "./doctordashborad/dashboardlayout/calender.component";
import { PatientnavbarComponent } from "./patientnavbar/patientnavbar.component";
import { DialogTemplateComponent } from "./Appointment/appointments/table/dialog-template/dialog-template.component";

const shared =  [
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
  MyCalenderComponent,
  PatientnavbarComponent,
]

export default shared;