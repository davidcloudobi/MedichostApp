import { Time } from '@angular/common';

export interface appointmentCard   {
  userID: string,
  name:string,
  gender:string,
  age:number,
  imageURL:string,
  contact:number,
  appointmentTime: Time
  state:number //To Specify the activity of a current Patient
}

