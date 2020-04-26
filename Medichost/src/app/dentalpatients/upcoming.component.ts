import { Component, OnInit } from '@angular/core';
import { PatientService } from 'src/Services/PatientService';
import { IUpcommingAppoinment } from 'src/Models/IUpcommingAppoinment';
import {faFileAlt} from '@fortawesome/free-solid-svg-icons';
@Component({
    selector: "app-upcoming",
    template: `<div *ngIf="UpComingAppointment">

    <ul class="list-group list-group-flush" *ngFor="let event of  UpComingAppointment">
      <li class="list-group-item d-flex justify-content-around">
      <div>
      <p>
      {{event.date}}
     </p>
     <p class="appointment-font">{{event.time}}</p>
      </div>
      <div>
    <p class="appointment-font">
    Treatment
    </p>
    <p class="appointment-font-1">
    {{event.treatment}}
    </p>
      </div>
      <div>
      <p class="appointment-font">
      Dentist
      </p>
      <p class="appointment-font-1">
      {{event.dentist}}
      </p></div>
      <div>
      <p class="appointment-font">
     Nurse
      </p>
      <p class="appointment-font-1">
      {{event.name}}
      </p>
      </div>
      <div class="mt-4">
      <span>
      <fa-icon class="text-primary appointment-font-2" [icon]="faFileAlt"></fa-icon>
      <a routerLink="/"  class="text-primary text-decoration-none appointment-font-2"> Note</a>
      </span>
     
      </div>
      </li>
    </ul>
  </div>`
})
export class UpcomingComponent implements OnInit {
    UpComingAppointment: IUpcommingAppoinment[]
    faFileAlt=faFileAlt
    errorMessage: string;
    items:[]
    constructor(private patientService: PatientService) {
 
    
    }
    ngOnInit(): void {
        this.patientService.loadUpcomingAppointMent().subscribe({
            next: event => {
                this.UpComingAppointment = event
            },
            error: err => this.errorMessage = err
        })
    }
}
