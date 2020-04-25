import { Component, ViewEncapsulation, Inject, ViewChild, OnInit } from '@angular/core';
import { SidebarComponent } from '@syncfusion/ej2-angular-navigations';
import { Menu, MenuItemModel } from '@syncfusion/ej2-navigations';
import { enableRipple } from '@syncfusion/ej2-base';
import { faCoffee, faTooth,faStethoscope, faPills,faQuestionCircle,faCalendarAlt, faSortDown, faEnvelope,faCut,faFlask, faUserFriends,faCommentAlt,faUsers,faFilePrescription,faHistory,faFileInvoice,faCommentDots, faUser, faCommentsDollar, faSlidersH} from '@fortawesome/free-solid-svg-icons';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';


@Component({
    selector: 'control-content',
    styleUrls: ['./patientnavbar.component.css'],
    templateUrl: 'patientnavbar.component.html',
    encapsulation: ViewEncapsulation.None
})
export class PatientnavbarComponent  {
    Avatar: string
    Name= "Dr robert j"
    Position="Dentist"
    faQuestionCircle=faQuestionCircle
    @ViewChild('sidebarMenuInstance')
    public sidebarMenuInstance: SidebarComponent;
    public width: string = '220px';
    public mediaQuery: string = ('(min-width: 600px)');
    public target: string = '.main-content';
    public dockSize: string = '50px';
     public enableDock: boolean = true;
    faTooth = faTooth
    public UserItem:MenuItemModel[] = [
        {
            text: 'Dr Adam',
            iconCss: this.Avatar,
            items: [
                { text: 'All Data' },
                { text: 'Category2' },
                { text: 'Category3' }
            ]
        }
    ]
    public menuItems = [
        {
            text: 'Overview',
            iconCss: faQuestionCircle,
           
        },
        {
            text: 'Calender',
            iconCss: faCalendarAlt,
           
           
        },
        {
            text: 'Patient List',
            iconCss: faUser,
           
        },
        {
            text: 'Mesaage',
            iconCss:faCommentDots,
          
        },
        {
            text: 'Payment information',
            iconCss: faCommentsDollar,
           
        },
        {
            text: 'Settings ',
            iconCss: faSlidersH,
          
            
        },
       
    ];

    openClick() {
        this.sidebarMenuInstance.toggle();
    }
};
// open new tab