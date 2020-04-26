import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";


import { AppComponent } from "./app.component";
import { AppRouter } from "./app.routes";


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRouter
  ],
  bootstrap: [ AppComponent ],
})

export class AppModule {}
