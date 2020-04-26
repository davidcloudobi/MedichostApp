import { Component, OnInit } from '@angular/core';
import { appointmentCard } from 'src/models/appointmentCard';

@Component({
  selector: 'app-search-patient',
  templateUrl: './search-patient.component.html',
  styleUrls: ['./search-patient.component.css']
})
export class SearchPatientComponent implements OnInit {

  searchedFor:boolean = false;
  searchResult: appointmentCard[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
