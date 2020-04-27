import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { appointmentCard, appointmentState } from 'src/models/appointmentCard';
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
    this.currentDoctor = routeData.doctorDetail;
  }

  sortAppointmentList(appointments: appointmentCard[]):appointmentSort
  {
    return appointments.reduce((reducer, item) =>
    {
      switch(item.state)
      {
        case appointmentState.onQueue:
          reducer.onQueue.push(item);
          break;

        case appointmentState.Waiting:
          reducer.onWaiting.push(item);
          break;

        case appointmentState.Pending:
          reducer.onPending.push(item);
          break;

        case appointmentState.Finished:
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



