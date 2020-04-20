import { Component, OnInit } from "@angular/core";
import { map } from "rxjs/operators";
import { Breakpoints, BreakpointObserver } from "@angular/cdk/layout";

@Component({
  selector: "app-homepage",
  templateUrl: "./homepage.component.html",
  styleUrls: ["./homepage.component.css"],
})
export class HomepageComponent implements OnInit {
  /** Based on the screen size, switch from standard to one column per row */
  cards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      if (matches) {
        return [
          { title: "Card 1", cols: 1, rows: 1 },
          { title: "Card 2", cols: 1, rows: 1 },
          { title: "Card 3", cols: 1, rows: 1 },
          { title: "Card 4", cols: 1, rows: 1 },
        ];
      }

      return [
        { title: "Card 1", cols: 1, rows: 2 },
        { title: "Card 2", cols: 2, rows: 1 },
        { title: "Card 3", cols: 1, rows: 1 },
        { title: "Card 4", cols: 1, rows: 1 },
      ];
    })
  );

  stats = [
    { title: "Total Patients", value: 45673, cols: 1, rows: 1 },
    { title: "Prnding Approval", value: 76, cols: 1, rows: 1 },
    { title: "New Patients", value: 45, cols: 1, rows: 1 },
    { title: "Recovering Patients", value: 32, cols: 1, rows: 1 },
    { title: "Total Earnings", value: 59624, cols: 1, rows: 1 },
    { title: "Yesterday's Eanings", value: 63475, cols: 1, rows: 1 },
  ];

  numbers = [];
  constructor(private breakpointObserver: BreakpointObserver) {}

  ngOnInit() {
    for (let index = 0; index < 1000; index++) {
      this.numbers.push(index);
    }
    console.log(this.numbers);
  }
}
