import { Component, OnInit } from '@angular/core';
import { Schedules, HourlySchedule, sideBarNavs, sideNav, actions, docActions} from './helpers/doctorAction'


@Component({
  selector: 'app-Dashboard',
  templateUrl: './Dashboard.component.html',
  styleUrls: ['./Dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor() { }


  sideNav: sideNav[] = sideBarNavs; // SideBar Options
  doctorActions: actions[] = docActions; // Doctor Options

  displayedColumns = ['time', '15', '30', '45', '60']; // Schedule Columns
  dataSource:HourlySchedule[] = Schedules; // Schedule

  //Calender Activity
  selectedDate: any;
  onSelect(event)
  {
    this.selectedDate= event;
  }


  ngOnInit() {
  }

}

