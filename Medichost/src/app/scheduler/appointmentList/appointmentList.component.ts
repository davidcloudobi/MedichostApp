import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { appointmentCard } from 'src/models/appointmentCard';
import { ActivatedRoute } from '@angular/router';
import { appointmentSort } from 'src/models/appointmentSorter';
import { appointmentDoctor } from 'src/models/appointmentDoctor';

@Component({
  selector: 'app-appointmentList',
  templateUrl: './appointmentList.component.html',
  styleUrls: ['./appointmentList.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AppointmentListsComponent implements OnInit {

  appointmentList: appointmentSort;
  currentDoctor: appointmentDoctor;

  constructor(private routeParam: ActivatedRoute) {  }

  ngOnInit()
  {
    const routeData = this.routeParam.snapshot.data;
    this.appointmentList = this.sortAppointmentList(routeData.appointmentList);
    this.appointmentList = routeData.doctorDetail;
  }

  todayDate():string
  {
    let today =  new Date(Date.now()).toString().split(" ");
    return `${today[2]} ${today[1]} ${today[3]}`.toUpperCase();
  }

  sortAppointmentList(appointments: appointmentCard[]):appointmentSort
  {
    return appointments.reduce((reducer, item) =>
    {
      switch(item.state)
      {
        case 0:
          reducer.onQueue.push(item);
          break;

        case 1:
          reducer.onWaiting.push(item);
          break;

        case 2:
          reducer.onPending.push(item);
          break;

        case 3:
          reducer.onFinished.push(item);
          break;

        default:
          break;
      }

      return reducer;
    },
    {onQueue:[], onWaiting:[], onPending:[], onFinished:[]});

  }

}



