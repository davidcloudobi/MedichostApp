import { NgModule } from "@angular/core";
import { SharedModules } from "../shared/widget/shared.module";
import { DoctorRouter } from "./doctor.routes";

@NgModule({
  declarations: [],
  imports: [SharedModules, DoctorRouter],
})
export class DoctorModule {}
