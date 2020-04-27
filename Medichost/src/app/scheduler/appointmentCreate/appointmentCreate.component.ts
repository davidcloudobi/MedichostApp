import { Component, OnInit } from '@angular/core';
import { appointmentCard } from 'src/models/appointmentCard';
import { appointmentDoctor } from 'src/models/appointmentDoctor';

@Component({
  selector: 'app-appointmentCreate',
  templateUrl: './appointmentCreate.component.html',
  styleUrls: ['./appointmentCreate.component.css']
})
export class AppointmentCreateComponent implements OnInit {

  constructor() { }
  currentDoctor:appointmentDoctor;
  viewModel:any = {
    currentAddress: "Home | Appointment",
    eveningSchedule : Array(4 * 6 + 1).fill(0).map((s,i)=>i * 10),
    morningSchedule : Array(3 * 6 + 1).fill(0).map((s, i) => i * 10),
    month : new Date().getMonth(),
    fullYear : new Date().getFullYear(),
    dateValue : new Date(Date.now()),
    minDate : new Date(2000, 1 , 1),
    maxDate : new Date(2050, 11, 15),
  }

  ngOnInit()
  {
  }


  getEveningSchedule(evening:number):string
  {
    const startTime = 5;
    const currentTime = startTime * 60 + evening;
    const hours = `${Math.floor(currentTime / 60 )}`.padStart(2, "0");
    const minutes = `${currentTime % 60}`.padStart(2, "0");

    return `${hours}:${minutes} PM`;
  }

  getMorningSchedule(morning:number):string
  {
    const startTime = 9;
    const currentTime = startTime * 60 + morning;

    const hour = Math.floor(currentTime / 60);
    const hours = `${hour}`.padStart(2, "0");
    const minutes = `${currentTime % 60}`.padStart(2, "0");

    return `${hours}:${minutes} ${hour == 12 ? 'PM' : 'AM'}`;
  }
}

