export interface HourlySchedule{
  appointmentType:string,
  patient:string,
  hour:number;
  minute:number;
  lastsFor:number;
  row:string;
}

export const Schedules:HourlySchedule[] =
[
  {row:'08:00', hour:8, minute:0, lastsFor:2, appointmentType:'Appointment', patient:'Mr. John Doe'},
  {row:'09:00', hour:9, minute:0, lastsFor:2, appointmentType:'Appointment', patient:'Miss. Sarah Clara'},
  {row:'10:00', hour:10, minute:15, lastsFor:2, appointmentType:'', patient:''},
  {row:'11:00', hour:11, minute:0, lastsFor:2, appointmentType:'', patient:''},
  {row:'12:00', hour:12, minute:0, lastsFor:2, appointmentType:'surgery', patient:'Mr. Young Barley'},
  {row:'13:00', hour:13, minute:0, lastsFor:2, appointmentType:'', patient:''},
  {row:'14:00', hour:14, minute:0, lastsFor:2, appointmentType:'', patient:''},
  {row:'15:00', hour:15, minute:0, lastsFor:2, appointmentType:'Appointment', patient:'Mrs. Patricia Ana'},
  {row:'16:00', hour:16, minute:0, lastsFor:2, appointmentType:'', patient:''},
  {row:'17:00', hour:17, minute:0, lastsFor:2, appointmentType:'', patient:''},
  {row:'18:00', hour:18, minute:0, lastsFor:2, appointmentType:'', patient:''},
]

export interface sideNav
{
  displayName:string;
  icon:string;
  children:sideNavChildren[]
}

export interface sideNavChildren
{
  displayName:string;
  link:string;
}


export const sideBarNavs:sideNav[] = [
  {displayName:'Dashboard', icon:'', children:[]},
  {displayName:'Appointments', icon:'', children:[]},
  {displayName:'Schedules', icon:'', children:[]},
  {displayName:'Operations', icon:'', children:[]},
  {displayName:'Lab reports', icon:'', children:[]},
  {displayName:'Medic Link', icon:'', children:[]},
  {displayName:'Messages', icon:'', children:[]},
  {displayName:'Patients', icon:'', children:[]},
  {displayName:'Staff', icon:'', children:[]},
  {displayName:'Prescriptions', icon:'', children:[]},
  {displayName:'Case History', icon:'', children:[]},
  {displayName:'Invoices', icon:'', children:[]},
  {displayName:'Emails', icon:'', children:[]},
  {displayName:'Send SMS', icon:'', children:[]},
];


export interface actions
{
  displayName:string;
  counter:number;
  icon:string;
}

export const docActions:actions[] = [
  {displayName:'Appointments', counter:23, icon:''},
  {displayName:'Schedules', counter:6, icon:''},
  {displayName:'Operations', counter:5, icon:''},
  {displayName:'Lab Reports', counter:12, icon:''},
  {displayName:'MedicLink', counter:1236, icon:''},
  {displayName:'Messages', counter:6, icon:''},
  {displayName:'Total Patients', counter:120, icon:''},
  {displayName:'Total Staff', counter:20, icon:''},
];
