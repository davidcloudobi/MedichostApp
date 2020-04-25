import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/sharedModule.module';
import { AppointmentRoutingModule } from './appointmentRouting.module';

import { DialogTemplateComponent } from './appointments/table/dialog-template/dialog-template.component';
import { HomeComponent } from './home/home.component';
import { AppointmentsComponent } from './appointments/appointments.component';
import { PatientsComponent } from './patients/patients.component';
import { TableComponent } from './appointments/table/table.component';
import { SyncFusionModules } from '../shared/sycnFusion.module';
import { AngularMaterialModules } from '../shared/angularMaterial.module';

@NgModule({
  imports: [
    SharedModule,
    SyncFusionModules,
    AngularMaterialModules,
    AppointmentRoutingModule
  ],

  entryComponents: [DialogTemplateComponent],

  declarations: [ HomeComponent, AppointmentsComponent, PatientsComponent, TableComponent, DialogTemplateComponent],
  providers: [   ]

})
export class AppointmentModule { }
