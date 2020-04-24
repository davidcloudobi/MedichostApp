import { Component } from "@angular/core";
import { map } from "rxjs/operators";
import { Breakpoints, BreakpointObserver } from "@angular/cdk/layout";
import { MatTableDataSource } from "@angular/material/table";
import { PeriodicElement } from "../appointments/table/table.component";

const ELEMENT_DATA: PeriodicElement[] = [
  {
    id: 1,
    name: "Hydrogen",
    gender: "Male",
    department: "H",
    doctor: "David",
    requestedDate: "12/3/45",
    time: "Morning",
  },
  {
    id: 2,
    name: "Helium",
    gender: "Female",
    department: "He",
    doctor: "Selena",
    requestedDate: "12/3/45",
    time: "Morning",
  },
  {
    id: 3,
    name: "Lithium",
    gender: "Male",
    department: "Li",
    doctor: "Talior",
    requestedDate: "12/3/45",
    time: "Morning",
  },
  {
    id: 4,
    name: "Beryllium",
    gender: "Female",
    department: "Be",
    doctor: "Joeline",
    requestedDate: "12/3/45",
    time: "Morning",
  },
  {
    id: 5,
    name: "Boron",
    gender: "Male",
    department: "B",
    doctor: "Will",
    requestedDate: "12/3/45",
    time: "Morning",
  },
  {
    id: 6,
    name: "Carbon",
    gender: "Female",
    department: "C",
    doctor: "Josh",
    requestedDate: "12/3/45",
    time: "Morning",
  },
  {
    id: 7,
    name: "Nitrogen",
    gender: "Male",
    department: "N",
    doctor: "Nathane",
    requestedDate: "12/3/45",
    time: "Morning",
  },
  {
    id: 8,
    name: "Oxygen",
    gender: "Female",
    department: "O",
    doctor: "Snow",
    requestedDate: "12/3/45",
    time: "Morning",
  },
  {
    id: 9,
    name: "Fluorine",
    gender: "Male",
    department: "F",
    doctor: "Steve",
    requestedDate: "12/3/45",
    time: "Morning",
  },
  {
    id: 10,
    name: "Neon",
    gender: "Femlae",
    department: "Ne",
    doctor: "Phlip",
    requestedDate: "12/3/45",
    time: "Morning",
  },
  {
    id: 11,
    name: "Neon",
    gender: "Femlae",
    department: "Ne",
    doctor: "James",
    requestedDate: "12/3/45",
    time: "Morning",
  },
  {
    id: 12,
    name: "Neon",
    gender: "Femlae",
    department: "Ne",
    doctor: "John",
    requestedDate: "12/3/45",
    time: "Morning",
  },
];

@Component({
  selector: "app-patients",
  templateUrl: "./patients.component.html",
  styleUrls: ["./patients.component.css"],
})
export class PatientsComponent {
  users = ELEMENT_DATA;

  dataSource = new MatTableDataSource(this.users);
  /** Based on the screen size, switch from standard to one column per row */
  cards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      if (matches) {
        return [
          { title: "Card 1", cols: 1, rows: 1 },
          { title: "Card 2", cols: 1, rows: 1 },
          { title: "Card 3", cols: 1, rows: 1 },
          { title: "Card 4", cols: 1, rows: 1 },
          { title: "Card 5", cols: 1, rows: 1 },
          { title: "Card 6", cols: 1, rows: 1 },
          { title: "Card 7", cols: 1, rows: 1 },
          { title: "Card 8", cols: 1, rows: 1 },
          { title: "Card 9", cols: 1, rows: 1 },
          { title: "Card 10", cols: 1, rows: 1 },
          { title: "Card 11", cols: 1, rows: 1 },
          { title: "Card 12", cols: 1, rows: 1 },
        ];
      }

      return [
        { title: "Card 1", cols: 1, rows: 1 },
        { title: "Card 2", cols: 1, rows: 1 },
        { title: "Card 3", cols: 1, rows: 1 },
        { title: "Card 4", cols: 1, rows: 1 },
        { title: "Card 5", cols: 1, rows: 1 },
        { title: "Card 6", cols: 1, rows: 1 },
        { title: "Card 7", cols: 1, rows: 1 },
        { title: "Card 8", cols: 1, rows: 1 },
        { title: "Card 9", cols: 1, rows: 1 },
        { title: "Card 10", cols: 1, rows: 1 },
        { title: "Card 11", cols: 1, rows: 1 },
        { title: "Card 12", cols: 1, rows: 1 },
      ];
    })
  );

  constructor(private breakpointObserver: BreakpointObserver) {}
  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
