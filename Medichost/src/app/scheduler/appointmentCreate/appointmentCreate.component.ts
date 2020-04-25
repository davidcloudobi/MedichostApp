import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { appointmentCard } from 'src/models/appointmentCard';

@Component({
  selector: 'app-appointmentCreate',
  templateUrl: './appointmentCreate.component.html',
  styleUrls: ['./appointmentCreate.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AppointmentCreateComponent implements OnInit {

  appointmentList:appointmentCard[];

  constructor() { }

  ngOnInit()
  {
    this.appointmentList = SAMPLE_DATA.sort((a,b) => (a.appointmentTime.hours * 60 + a.appointmentTime.minutes) - (b.appointmentTime.hours * 60 + b.appointmentTime.minutes));
  }

  timeElasped(hours:number, minutes:number):string{
    if(hours > new Date(Date.now()).getHours() || (hours >= new Date(Date.now()).getHours() && minutes >= new Date(Date.now()).getMinutes()))
    {
      return 'Not Arrived';
    }
    let minutesDiff = minutes < new Date(Date.now()).getMinutes() ? new Date(Date.now()).getMinutes() : 0;
    let hourDiff = hours < new Date(Date.now()).getHours() ? new Date(Date.now()).getHours() - hours : 0;

    return hourDiff > 0 ?  hourDiff+":"+minutesDiff.toString().padStart(2, "0")+" Hrs" : minutesDiff.toString().padStart(2, "0") + "mins";

  }

  patientCheck(hours:number):boolean
  {
    return hours > new Date(Date.now()).getHours();
  }

  todayDate():string
  {
    let today =  new Date(Date.now()).toString().split(" ");
    return `${today[2]} ${today[1]} ${today[3]}`;
  }

}

const SAMPLE_DATA : appointmentCard[] = [
  { userID: '', name:'Varun Bose', gender:'Male', age:32, imageURL:'',contact:456212455, appointmentTime: {hours:17, minutes:10}},
  { userID: '', name:'Jhon Wick', gender:'Male', age:45, imageURL:'',contact:456212455, appointmentTime: {hours:14, minutes:30},},
  { userID: '', name:'Johny Ive', gender:'Male', age:31, imageURL:'',contact:456212455, appointmentTime: {hours:15, minutes:3},},
  { userID: '', name:'Sufiya', gender:'Female', age:28, imageURL:'',contact:456212455, appointmentTime: {hours:15, minutes:45},},
  { userID: '', name:'David John', gender:'Male', age:55, imageURL:'',contact:456212455, appointmentTime: {hours:23, minutes:10},},
  { userID: '', name:'Emma', gender:'Female', age:30, imageURL:'',contact:456212455, appointmentTime: {hours:18, minutes:30},},
]



