import { Component, OnInit } from '@angular/core';
import { appointmentCard } from 'src/models/appointmentCard';

@Component({
  selector: 'app-appointmentCreate',
  templateUrl: './appointmentCreate.component.html',
  styleUrls: ['./appointmentCreate.component.css']
})
export class AppointmentCreateComponent implements OnInit {

  constructor() { }
  selectedDate:any;
  currentAddress:string = "Home > Appointment";
  morningScheduling:any[] = [];
  eveningScheduling:any[] = [];

  ngOnInit()
  {
    for(let h = 9, m = 0; h < 12 ;)
    {

      if(m % 60 == 0)h++;
      this.morningScheduling.push({hour:h, minute:m % 60});
      m += 10;
    }

    for(let h = 17, m = 0; h < 22;)
    {
      if(m % 60 == 0)h++;
      this.eveningScheduling.push({hour:h, minute:m % 60});
      m += 10;
    }
  }

  dateChanged(date)
  {
    alert(`Selected: ${date}`);
  }
}

