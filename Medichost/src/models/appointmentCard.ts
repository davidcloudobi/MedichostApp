import { Time } from '@angular/common';

export enum appointmentState { onQueue, Pending, Waiting, Finished }

export interface appointmentCard   {
  userID: string,
  name:string,
  gender:string,
  age:number,
  imageURL:string,
  contact:number,
  appointmentTime: Time
  state:appointmentState
}

