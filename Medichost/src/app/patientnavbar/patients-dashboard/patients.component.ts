import { Component, ViewEncapsulation, OnInit, AfterContentInit } from '@angular/core';
import { PatientService } from 'src/Services/PatientService';
import { IPatientsModel } from 'src/Models/IPatientsModel';
import { faUser,faArrowUp ,faFileAlt, faFileDownload, faFileUpload, faDownload, faTrash } from '@fortawesome/free-solid-svg-icons';
import { IDocumentModel } from 'src/Models/IDocumentModel';

@Component({
    selector: "patient-dashboad",
    templateUrl: "./patients.component.html",
    styleUrls: ["./patients.component.css"],
    encapsulation: ViewEncapsulation.None

})
export class PatientDashBoardComponent implements OnInit{
    errorMessage: string;
    faUser = faUser
    faFileDownload = faFileDownload
    faFileUpload = faFileUpload
    faFileAlt = faFileAlt
    faDownload = faDownload
    faTrash = faTrash
    faArrowUp =faArrowUp 
    filter: string
    items: [
        "show previous"
    ]
    document: IDocumentModel[]
    

    constructor(private patientsService: PatientService) {


    }
  
    ngOnInit(): void {
        this.patientsService.loadPatients().subscribe({
            next: patient => {
                this.Patients = patient;
              
            },
            error: err => this.errorMessage = err

        });;
        this.patientsService.loadDocument().subscribe({
            next: document => {
                this.document = document
            }, error: err => this.errorMessage = err
            
        })
       
    }
   

    Name = "Daine Corper"
    Email = "dainecorper@codebase.com"
    Post = 25
    Upcoming = 10
    Date = "20 Nov 19"
    Patients: IPatientsModel



}