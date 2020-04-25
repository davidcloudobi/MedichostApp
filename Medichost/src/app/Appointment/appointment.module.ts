import { NgModule } from "@angular/core";
import { AppointmentRouter } from "./appointmentRouter.module";
import SharedComponents from '../sharedComponent.module';

@NgModule({

  imports: [AppointmentRouter],
  declarations: [ ...SharedComponents ],
  providers: [],
})
export class AppointmentModule {}
