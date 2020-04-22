import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { faCoffee, faStethoscope,faUser, faPills,faQuestionCircle,faCalendarAlt, faSearchDollar,faSlidersH,faSortDown, faEnvelope,faCut,faFlask, faUserFriends,faCommentAlt,faUsers,faFilePrescription,faHistory,faFileInvoice,faCommentDots} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-patientnavbar',
  templateUrl: './patientnavbar.component.html',
  styleUrls: ['./patientnavbar.component.css']
})
export class PatientnavbarComponent {
  faCommentDots = faCommentDots
  faUser = faUser
  faCalendarAlt = faCalendarAlt
  faSearchDollar= faSearchDollar
  faQuestionCircle = faQuestionCircle
  faSlidersH=faSlidersH
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(private breakpointObserver: BreakpointObserver) {}

}
