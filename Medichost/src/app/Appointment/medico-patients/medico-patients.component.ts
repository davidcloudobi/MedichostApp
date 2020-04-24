import { Component, OnInit } from '@angular/core';
import { PeriodicElement } from '../appointments/table/table.component';

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
    doctor: "David",
    requestedDate: "12/3/45",
    time: "Morning",
  },
  {
    id: 3,
    name: "Lithium",
    gender: "Male",
    department: "Li",
    doctor: "David",
    requestedDate: "12/3/45",
    time: "Morning",
  },
  {
    id: 4,
    name: "Beryllium",
    gender: "Female",
    department: "Be",
    doctor: "David",
    requestedDate: "12/3/45",
    time: "Morning",
  },
  {
    id: 5,
    name: "Boron",
    gender: "Male",
    department: "B",
    doctor: "David",
    requestedDate: "12/3/45",
    time: "Morning",
  },
  {
    id: 6,
    name: "Carbon",
    gender: "Female",
    department: "C",
    doctor: "David",
    requestedDate: "12/3/45",
    time: "Morning",
  },
  {
    id: 7,
    name: "Nitrogen",
    gender: "Male",
    department: "N",
    doctor: "David",
    requestedDate: "12/3/45",
    time: "Morning",
  },
  {
    id: 8,
    name: "Oxygen",
    gender: "Female",
    department: "O",
    doctor: "David",
    requestedDate: "12/3/45",
    time: "Morning",
  },
  {
    id: 9,
    name: "Fluorine",
    gender: "Male",
    department: "F",
    doctor: "David",
    requestedDate: "12/3/45",
    time: "Morning",
  },
  {
    id: 10,
    name: "Neon",
    gender: "Femlae",
    department: "Ne",
    doctor: "David",
    requestedDate: "12/3/45",
    time: "Morning",
  },
  {
    id: 11,
    name: "Neon",
    gender: "Femlae",
    department: "Ne",
    doctor: "David",
    requestedDate: "12/3/45",
    time: "Morning",
  },
  {
    id: 12,
    name: "Neon",
    gender: "Femlae",
    department: "Ne",
    doctor: "David",
    requestedDate: "12/3/45",
    time: "Morning",
  },
];

@Component({
  selector: 'app-medico-patients',
  templateUrl: './medico-patients.component.html',
  styleUrls: ['./medico-patients.component.css']
})
export class MedicoPatientsComponent implements OnInit {
  Doctors = ELEMENT_DATA
  constructor() { }

  ngOnInit(): void {
  }

}
