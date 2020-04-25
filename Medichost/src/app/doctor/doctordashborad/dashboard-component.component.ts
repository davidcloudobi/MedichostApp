import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { DomSanitizer } from '@angular/platform-browser';
import { MatIconRegistry } from '@angular/material/icon';
import { faCoffee, faStethoscope, faPills,faQuestionCircle,faCalendarAlt, faSortDown, faEnvelope,faCut,faFlask, faUserFriends,faCommentAlt,faUsers,faFilePrescription,faHistory,faFileInvoice,faCommentDots} from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-dashboard-component',
  templateUrl: './dashboard-component.component.html',
  styleUrls: ['./dashboard-component.component.css'],

})
export class DashboardComponentComponent implements OnInit {

  Greetings: string;
  Name = "Dr Robert";
  Search: string
  Avatar: string
  faCoffee = faCoffee;
  faStethoscope = faStethoscope
  faPills = faPills
  faSortDown = faSortDown
  faCut = faCut
  faFlask = faFlask
  faCommentAlt = faCommentAlt
  faUserFriends = faUserFriends
  faUsers = faUsers
  faFilePrescription = faFilePrescription
  faHistory = faHistory
  faFileInvoice = faFileInvoice
  faEnvelope = faEnvelope
  faCommentDots = faCommentDots
  faQuestionCircle = faQuestionCircle
  faCalendarAlt=faCalendarAlt
 Greet() {
  const hours = new Date().getHours()
   if (hours > 0 && hours < 12) {
     return "Good morning"
   }
   else if (hours > 12 && hours < 16) {
     return "Good Afternoon"
   }
   else if (hours > 16 && hours < 23) {
     return "Good Evening"
   }
   else {
    return "Good Evening"
   }
 
 }
  SetAvatar(Gender = "male") {
    Gender = Gender.toLowerCase()
   if (Gender == "male") {
      this.Avatar ="male"
   }
   else if (Gender == "female") {
     this.Avatar = "female"
   }
   else {
    this.Avatar ="male"
    }
}
  /** Based on the screen size, switch from standard to one column per row */
  cards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      if (matches) {
        return [
          { title: faStethoscope,name:"Appointment",count:23, cols: 1, rows: 1,style:"#FBB917"  },
        { title:faStethoscope,name:"Schedules",count:23, cols: 1, rows: 1,style:"#1589FF" },
        { title: faStethoscope, name: "Operation", count: 23, cols: 1, rows: 1, style: " #F88017" },
        { title: faStethoscope,name:"Labs report",count:23, cols: 1, rows: 1 ,style:"#E0B0FF"},
        { title: faStethoscope, name: "medicine", count: 23, cols: 1, rows: 1 ,style:"#4CC417"},
        { title: faStethoscope,name:"message",count:23, cols: 1,rows: 1 ,style:"#3BB9FF"},
        { title:faStethoscope, name: "total Patient", count: 120, cols: 1, rows: 1 ,style:"#54C571"},
       
        { title: faStethoscope,name:"Total staff", count:23,cols: 1, rows: 1,style:"#B93B8F" }
        ];
      }

      return [
        { title: faStethoscope,name:"Appointment",count:23, cols: 1, rows: 1,style:"#FBB917"  },
        { title: faCalendarAlt,name:"Schedules",count:23, cols: 1, rows: 1,style:"#1589FF" },
        { title: faCut , name: "Operation", count: 23, cols: 1, rows: 1, style: " #F88017" },
        { title:  faFlask,name:"Labs report",count:23, cols: 1, rows: 1 ,style:"#E0B0FF"},
        { title:   faPills, name: "medicine", count: 23, cols: 1, rows: 1 ,style:"#4CC417"},
        { title: faCommentAlt,name:"message",count:23, cols: 1,rows: 1 ,style:"#3BB9FF"},
        { title:faUserFriends , name: "total Patient", count: 120, cols: 1, rows: 1 ,style:"#54C571"},
       
        { title: faUsers,name:"Total staff", count:23,cols: 1, rows: 1,style:"#B93B8F" }
     
      ];
    })
  );


  constructor(private breakpointObserver: BreakpointObserver, private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer) {
    this.matIconRegistry.addSvgIcon("male", this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/man-svgrepo-com.svg"))
    this.matIconRegistry.addSvgIcon("female",this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/woman-svgrepo-com.svg"))
  }
  ngOnInit(): void {
    this.Greetings = this.Greet();
    // insert gender
    this.SetAvatar()
   
  
  
  }
}
