import { Component, OnInit } from '@angular/core';
import { appointmentCard } from 'src/models/appointmentCard';

@Component({
  selector: 'app-book-appointment',
  templateUrl: './book-appointment.component.html',
  styleUrls: ['./book-appointment.component.css']
})
export class BookAppointmentComponent implements OnInit {

  searchedFor:boolean = false;
  searchResult: appointmentCard[] = [];
  
  constructor() { }

  ngOnInit(): void {
  }

}
