import { NgModule } from "@angular/core";
import { SharedModules } from '../shared/widget/shared.module';
import { SchedulerRouter } from './patients.routes';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({

  imports: [
    SharedModules,
    SchedulerRouter,
    FontAwesomeModule 
  ],
  declarations: [ ],
  providers: [],
})
export class PatientsModule {}
