import { Component, NgModule } from '@angular/core';
import { EventSettingsModel } from '@syncfusion/ej2-angular-schedule';
@Component({
    selector:"app-schedule",
    template: `<ejs-schedule width='96%' height='550px' [selectedDate]='selectedDate'
    [eventSettings]='eventSettings'></ejs-schedule>`
})
        
    
export class MyScheduleComponent{
    public data: object [] = [{
        Id: 2,
        EventName: 'Meeting',
        StartTime: new Date(2018, 1, 15, 10, 0),
        EndTime: new Date(2018, 1, 15, 12, 30),
        IsAllDay: false
      }];
      public selectedDate: Date = new Date(2018, 1, 15);
      public eventSettings: EventSettingsModel = {
        dataSource: this.data,
        fields: {
          id: 'Id',
          subject: { name: 'EventName' },
          isAllDay: { name: 'IsAllDay' },
          startTime: { name: 'StartTime' },
          endTime: { name: 'EndTime' },
        }
      };
  }