import { Component } from '@angular/core';
import { MatIconRegistry } from "@angular/material/icon";
import { DomSanitizer } from "@angular/platform-browser";
import { faCoffee, faStethoscope, faPills,faQuestionCircle,faCalendarAlt, faSortDown, faEnvelope,faCut,faFlask, faUserFriends,faCommentAlt,faUsers,faFilePrescription,faHistory,faFileInvoice,faCommentDots} from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-doctordashboard',
  templateUrl: './dashboard.component.html',


  
})
export class DoctorComponent {
    natMenu:string
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

  title = 'Emr';
  constructor(
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer
  ) {
    this.matIconRegistry.addSvgIcon(
      "medic",
      this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/cross.svg"))
   
  }
  }


  

