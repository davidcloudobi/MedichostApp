import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-schedule-nav',
  templateUrl: './schedule-nav.component.html',
  styleUrls: ['./schedule-nav.component.css']
})
export class ScheduleNavComponent implements OnInit {
  @Input() displayExtra:boolean = false;
  
  constructor() { }

  ngOnInit(): void {
  }

}
