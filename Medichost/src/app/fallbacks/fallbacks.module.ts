import { NgModule } from "@angular/core";
import { SharedModules } from '../shared/widget/shared.module';
import { FallbackRouter } from './fallbacks.routes';

@NgModule({

  imports: [
    SharedModules,
    FallbackRouter,
  ],
  declarations: [ ],
  providers: [],
})
export class FallbackModule {}
