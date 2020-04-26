import { Component, OnInit, Input } from '@angular/core';
import { appointmentCard } from 'src/models/appointmentCard';
import { appointmentSort } from 'src/models/appointmentSorter';

@Component({
  selector: 'patient-list',
  templateUrl: './waitingPatients.component.html',
  styleUrls: ['./waitingPatients.component.css']
})
export class WaitingPatientsComponent implements OnInit {

  @Input() patients:appointmentCard[];
  @Input() appointments : appointmentSort;
  
  constructor() { }

  ngOnInit() {
  }

  timeElasped(time:appointmentCard):string{

    const totalElapsed = new Date(Date.now()).getHours() * 60 + new Date(Date.now()).getMinutes();
    const appointmentTime = time.appointmentTime.hours * 60 + time.appointmentTime.minutes;

    if(appointmentTime < totalElapsed)
    {
      let delay = totalElapsed - appointmentTime;
      let hours = `${Math.floor(delay / 60)}`.padStart(2, "0");
      let minutes = `${(delay % 60)}`.padStart(2, "0");

      return (delay / 60 > 0) ? `${hours}:${minutes} Hrs` : `${minutes} mins`;
    }

    return 'Not Arrived';
  }

  canCheckVital(time:appointmentCard):boolean{
    const current = new Date(Date.now());
    const patientTime = (time.appointmentTime.hours * 60 + time.appointmentTime.minutes);
    const totalTime = (current.getHours() * 60 + current.getMinutes());
    return totalTime > patientTime;
  }

  isEven(patient:appointmentCard):boolean{
    return (this.patients.indexOf(patient) + 1) % 2 == 0
  }

  displayAppointmentTime(patient:appointmentCard):string{
    const {hours, minutes} = patient.appointmentTime;

    const period = hours % 12 >= 0 ? ' PM' : ' AM';
    const hour = hours % 12 != 0 ? hours % 12 : period.indexOf('P') != -1 ? 12 : 0;

    const displayHour = `${hour}`.padStart(2, "0");
    const displayMinutes = `${minutes}`.padStart(2, "0");

    return `${displayHour}:${displayMinutes} ${period}`;
  }

  displayPatientActivity(patient: appointmentCard):string{
    const check = this.canCheckVital(patient);
    return check ? "<span>Check In</span>" : "<span>Vitals</span>";
  }
}