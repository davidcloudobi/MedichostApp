import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router';
import { appointmentCard } from 'src/models/appointmentCard';
import { Observable, of } from 'rxjs';
import { appointmentDoctor } from 'src/models/appointmentDoctor';

@Injectable()

export class DoctorDetailResolver implements Resolve<Observable<appointmentDoctor>>{
  constructor(){

 }

 resolve(route:ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<appointmentDoctor> {

  const data: appointmentDoctor = {
    name: 'Joshua Batch',
    department: 'Clinic',
    doctorID: 'NOT_YET_SPECIFIED',
    imageURL: ''
  };


  return of(data);
  }

}
