import { NgModule } from "@angular/core";
import { SharedModules } from '../shared/widget/shared.module';
import { FallbackRouter } from './fallbacksRoutes.module';

@NgModule({

  imports: [
    SharedModules,
    FallbackRouter,
  ],
  declarations: [ ],
  providers: [],
})
export class FallbackModule {}
