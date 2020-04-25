import { Component, ViewEncapsulation } from '@angular/core';
import { faCoffee,faEdit,faBriefcase,faAngleRight,faUser,faPlusCircle,faSearch,faBell,faStethoscope, faPills,faQuestionCircle,faCalendarAlt, faSortDown, faEnvelope,faCut,faFlask, faUserFriends,faCommentAlt,faUsers,faFilePrescription,faHistory,faFileInvoice,faCommentDots} from '@fortawesome/free-solid-svg-icons';

@Component({
    selector: "patientdetail-dashboad",
   templateUrl: "patientdetail.component.html",
    encapsulation: ViewEncapsulation.None
    
})
export class PatientDetailsHeaderComponent{
    Search: string
    faSearch = faSearch
    faUser = faUser
    faAngleRight = faAngleRight
    faBriefcase = faBriefcase
    faEdit=faEdit
    Name = "Daine criuse"
    faPlusCircle = faPlusCircle
    faBell=faBell
    
}