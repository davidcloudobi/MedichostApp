import { Component, OnInit } from "@angular/core";
import { DialogService } from "../dialog.service";
import { PeriodicElement } from "../table.component";

@Component({
  selector: "app-dialog-template",
  templateUrl: "./dialog-template.component.html",
  styleUrls: ["./dialog-template.component.css"],
})
export class DialogTemplateComponent implements OnInit {
  Data: PeriodicElement;
  constructor(private dialogService: DialogService) {}

  ngOnInit(): void {
    this.dialogService.data.subscribe((value: PeriodicElement) => {
      this.Data = value;
      console.log(this.Data.gender);
    });
  }
}
