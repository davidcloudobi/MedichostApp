import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

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
import { PieChartComponent } from './shared/widget/pie-chart/pie-chart.component';

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
  ],
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
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
