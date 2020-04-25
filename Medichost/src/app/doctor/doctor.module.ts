import { NgModule } from "@angular/core";
import { SharedModules } from '../shared/widget/shared.module';
import { DoctorRouter } from './doctorRoutes.module';

@NgModule({

  imports: [
    SharedModules,
    DoctorRouter,
  ],
  declarations: [ ],
  providers: [],
})
export class DoctorModule {}
