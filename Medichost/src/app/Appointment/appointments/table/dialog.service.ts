import { Subject } from "rxjs";
import { PeriodicElement } from "./table.component";

export class DialogService {
  data = new Subject<PeriodicElement>();
  onDialog(value: PeriodicElement) {
    this.data.next(value);
  }
}
