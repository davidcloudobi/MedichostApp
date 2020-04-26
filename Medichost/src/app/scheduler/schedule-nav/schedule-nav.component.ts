import { Component, OnInit, Input } from '@angular/core';
import { appointmentDoctor } from 'src/models/appointmentDoctor';

@Component({
  selector: 'app-schedule-nav',
  templateUrl: './schedule-nav.component.html',
  styleUrls: ['./schedule-nav.component.css']
})
export class ScheduleNavComponent implements OnInit {
  @Input() displayExtra:boolean;
  @Input() doctorDetail:appointmentDoctor;

  constructor() { }

  ngOnInit(): void {
  }
  
  todayDate():string
  {
    let today =  new Date(Date.now()).toString().split(" ");
    return `${today[2]} ${today[1]} ${today[3]}`.toUpperCase();
  }
}
