import { NgModule } from "@angular/core";
import { Routes, RouterModule } from '@angular/router';
import { AppointmentDefaultComponent } from './appointment-default/appointment-default.component';
import { HomepageComponent } from './homepage/homepage.component';
import { AppointmentsComponent } from './appointments/appointments.component';
import { PatientsComponent } from './patients/patients.component';


const routes:Routes = [
  { path:"", component: AppointmentDefaultComponent  },
  { path:"home", component: HomepageComponent  },
  { path:"appointments", component: AppointmentsComponent  },
  { path:"patients", component: PatientsComponent  }
];

@NgModule({
  imports:[
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})

export class AppointmentRouter { }
