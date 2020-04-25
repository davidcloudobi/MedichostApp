import { NgModule } from "@angular/core";
import { MatGridListModule } from "@angular/material/grid-list";
import { MatCardModule } from "@angular/material/card";
import { MatMenuModule } from "@angular/material/menu";
import { MatIconModule } from "@angular/material/icon";
import { MatButtonModule } from "@angular/material/button";
import { LayoutModule } from "@angular/cdk/layout";
import { ScrollingModule } from "@angular/cdk/scrolling";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { HighchartsChartModule } from "highcharts-angular";
import { MatTableModule } from "@angular/material/table";
import { MatPaginatorModule } from "@angular/material/paginator";
import { MatSortModule } from "@angular/material/sort";

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormsModule } from '@angular/forms';
import {MatToolbarModule} from '@angular/material/toolbar';
import { HttpClientModule } from '@angular/common/http';
import { ScheduleModule } from '@syncfusion/ej2-angular-schedule';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { SidebarModule, MenuModule } from '@syncfusion/ej2-angular-navigations';
import { ListViewModule } from '@syncfusion/ej2-angular-lists';
import { CalendarModule } from '@syncfusion/ej2-angular-calendars';
import { MaterialModule } from 'src/app/shared/material/material.module';
import { AngularMaterialsModules } from 'src/app/shared/materialsModule/material_module';

const MODULES = [
    MaterialModule,
    AngularMaterialsModules,
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
  ListViewModule,
    
];

@NgModule({
  imports:MODULES,
  exports:MODULES
})

export class SharedModules { }
