import { NgModule } from "@angular/core";
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatIconModule } from "@angular/material/icon";
import { MatButtonModule } from "@angular/material/button";
import { MatListModule } from "@angular/material/list";
import { MatCardModule } from "@angular/material/card";
import { RouterModule } from "@angular/router";
import { MatGridListModule } from "@angular/material/grid-list";
import { MatBadgeModule } from "@angular/material/badge";

const MaterialComponents = [
  MatSidenavModule,
  MatIconModule,
  MatButtonModule,
  MatListModule,
  RouterModule,
  MatCardModule,
  MatGridListModule,
  MatBadgeModule,
];

@NgModule({
  imports: [MaterialComponents],
  exports: [MaterialComponents],
})
export class MaterialModule {}
