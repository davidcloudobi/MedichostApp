import { NgModule } from "@angular/core";
import { SharedModules } from "../shared/widget/shared.module";
import { DoctorRouter } from "./doctorRoutes.module";

@NgModule({
  declarations: [],
  imports: [SharedModules, DoctorRouter],
})
export class DoctorModule {}
