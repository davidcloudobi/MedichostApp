import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { PatientDashBoardComponent } from '../dentalpatients/patients-dashboard/patients.component';
import { UpcomingComponent } from '../dentalpatients/upcoming.component';

const routes: Routes = [
  {
    path: "details",
    component: PatientDashBoardComponent,
    children: [{
      path: "upcoming",
      component:UpcomingComponent
      
    }]
  },
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class SchedulerRouter { }
