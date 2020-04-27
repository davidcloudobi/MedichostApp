import { Component, OnInit, ViewChild, ElementRef, ViewEncapsulation } from '@angular/core';
import { appointmentCard } from 'src/models/appointmentCard';
import { DialogComponent, AnimationSettingsModel } from '@syncfusion/ej2-angular-popups';
import { detach, isNullOrUndefined } from '@syncfusion/ej2-base';
import { ButtonComponent } from '@syncfusion/ej2-angular-buttons';

@Component({
  selector: 'app-new-patient',
  templateUrl: './new-patient.component.html',
  styleUrls: ['./new-patient.component.css']
})
export class NewPatientComponent implements OnInit {

  searchedFor:boolean = false;
  searchResult: appointmentCard[] = [];
  constructor() { }
  ngOnInit(){}

  @ViewChild('template')
  public Dialog: DialogComponent;

  @ViewChild('ButtonInstance')
  public dlgbtn: ButtonComponent;

  @ViewChild('sendButton')
  public sendButton: ElementRef;

  @ViewChild('inVal')
  public inVal: ElementRef;

  @ViewChild('dialogText')
  public dialogText: ElementRef;

  public showCloseIcon: Boolean = true;
  public height = '75%';
  public target = '.control-section';
  public animationSettings: AnimationSettingsModel = { effect: 'None' };
  public width = '60%';

  public BtnClick = (): void => {
      this.Dialog.show();
  }

  public dialogClose = (): void => {
      this.dlgbtn.element.style.display = '';
  }

  public dialogOpen = (): void => {
      this.dlgbtn.element.style.display = 'none';
      (document.getElementById('sendButton') as any).keypress = (e: any) => {
          if (e.keyCode === 13) { this.updateTextValue(); }
      };
      (document.getElementById('inVal')as HTMLElement).onkeydown = (e: any) => {
          if (e.keyCode === 13) { this.updateTextValue(); }
      };
      document.getElementById('sendButton').onclick = (): void => {
          this.updateTextValue();
      };
  }

  public updateTextValue = (): void => {
      if (!isNullOrUndefined(document.getElementsByClassName('contentText')[0])) {
          detach(document.getElementsByClassName('contentText')[0]);
      }
      if (this.inVal.nativeElement.value !== '') {
          this.dialogText.nativeElement.innerHTML = this.inVal.nativeElement.value;
      }
      this.inVal.nativeElement.value = '';
  }

}

