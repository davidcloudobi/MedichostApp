import { NgModule } from "@angular/core";
import { SharedModules } from '../shared/widget/shared.module';
import { SchedulerRouter } from './patientsRoutes.module';

@NgModule({

  imports: [
    SharedModules,
    SchedulerRouter,
  ],
  declarations: [ ],
  providers: [],
})
export class SchedulerModule {}
