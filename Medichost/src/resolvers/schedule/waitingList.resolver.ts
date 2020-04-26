import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router';
import { appointmentCard } from 'src/models/appointmentCard';
import { Observable, of } from 'rxjs';

@Injectable()

export class WaitingListResolver implements Resolve<Observable<appointmentCard[]>>{
  constructor(){

 }

 resolve(route:ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<appointmentCard[]> {

  const data: appointmentCard[] = [
    { state:0, userID: '', name:'Varun Bose', gender:'Male', age:32, imageURL:'',contact:456212455, appointmentTime: {hours:17, minutes:10}},
    { state:0, userID: '', name:'Jhon Wick', gender:'Male', age:45, imageURL:'',contact:456212455, appointmentTime: {hours:14, minutes:30},},
    { state:0, userID: '', name:'Johny Ive', gender:'Male', age:31, imageURL:'',contact:456212455, appointmentTime: {hours:15, minutes:3},},
    { state:0, userID: '', name:'Sufiya', gender:'Female', age:28, imageURL:'',contact:456212455, appointmentTime: {hours:15, minutes:45},},
    { state:0, userID: '', name:'David John', gender:'Male', age:55, imageURL:'',contact:456212455, appointmentTime: {hours:23, minutes:10},},
    { state:0, userID: '', name:'Emma', gender:'Female', age:30, imageURL:'',contact:456212455, appointmentTime: {hours:18, minutes:30},},
  ];

  
  return of(data.sort((a:appointmentCard,b:appointmentCard) =>
                                            (a.appointmentTime.hours * 60 + a.appointmentTime.minutes) - (b.appointmentTime.hours * 60 + b.appointmentTime.minutes)));
 }
}
