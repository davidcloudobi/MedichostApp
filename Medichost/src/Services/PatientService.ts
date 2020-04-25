import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { tap, catchError, map } from 'rxjs/operators';
import { IPatientsModel } from 'src/Models/IPatientsModel';
import { IDocumentModel } from 'src/Models/IDocumentModel';
import { IUpcommingAppoinment } from 'src/Models/IUpcommingAppoinment';

@Injectable({
    providedIn: 'root'
  })
export class PatientService{
  private patientsUrl = 'assets/api/patients.json';
  private documentUrl = 'assets/api/files.json'
  private upcomingAppointment ='assets/api/appointment.json'
  constructor(private http: HttpClient) { }
  loadPatients(): Observable<IPatientsModel[]>{
    return this.http.get<IPatientsModel[]>(this.patientsUrl).pipe(tap(data=> data),catchError(this.handleError))
  }
    loadPatient(id:number):Observable<IPatientsModel | undefined> {
      return this.loadPatients()
      .pipe(
        map((products: IPatientsModel[]) => products.find(p => p.id === id))
      );
}
  loadDocument(): Observable<IDocumentModel[]>{
    return this.http.get<IDocumentModel[]>(this.documentUrl).pipe(tap(data => data),
      catchError(this.handleError));
    }
private handleError(err: HttpErrorResponse) {
    // in a real world app, we may send the server to some remote logging infrastructure
    // instead of just logging it to the console
    let errorMessage = '';
    if (err.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      errorMessage = `An error occurred: ${err.error.message}`;
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
    }
    console.error(errorMessage);
    return throwError(errorMessage);
  }

  loadUpcomingAppointMent(): Observable<IUpcommingAppoinment[]>{
 return this.http.get<IUpcommingAppoinment[]>(this.upcomingAppointment).pipe(tap(data => console.log(data)),catchError(this.handleError))
}
}