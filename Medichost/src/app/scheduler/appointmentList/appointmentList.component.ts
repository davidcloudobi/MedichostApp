import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { appointmentCard } from 'src/models/appointmentCard';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-appointmentList',
  templateUrl: './appointmentList.component.html',
  styleUrls: ['./appointmentList.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AppointmentListComponent implements OnInit {

  appointmentList:appointmentCard[];
  constructor(private routeParam: ActivatedRoute) {  }

  ngOnInit()
  {
    this.appointmentList = this.routeParam.snapshot.data.appointmentList;
  }

  timeElasped(time:appointmentCard):string{

    const totalElapsed = new Date(Date.now()).getHours() * 60 + new Date(Date.now()).getMinutes();
    const appointmentTime = time.appointmentTime.hours * 60 + time.appointmentTime.minutes;

    if(appointmentTime < totalElapsed)
    {
      let delay = totalElapsed - appointmentTime;
      return (delay / 60 > 0) ? (delay/60 + ":" + delay%60).padStart(2, "0")+" Hrs" : `${delay%60}`.padStart(2, "0") + "mins";
    }

    return 'Not Arrived';
  }

  patientCheck(time:appointmentCard):boolean
  {
    const currentTime = new Date(Date.now());
    return (time.appointmentTime.hours * 60 + time.appointmentTime.minutes) > (currentTime.getHours() * 60 + currentTime.getMinutes());
  }

  todayDate():string
  {
    let today =  new Date(Date.now()).toString().split(" ");
    return `${today[2]} ${today[1]} ${today[3]}`;
  }

}



