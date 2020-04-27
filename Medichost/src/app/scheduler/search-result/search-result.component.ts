import { Component, OnInit, ViewChild, ElementRef, ViewEncapsulation, Input, SimpleChanges } from '@angular/core';
import { DialogComponent, AnimationSettingsModel } from '@syncfusion/ej2-angular-popups';
import { detach, isNullOrUndefined } from '@syncfusion/ej2-base';
import { ButtonComponent } from '@syncfusion/ej2-angular-buttons';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.css'],
  encapsulation: ViewEncapsulation.None
})

export class SearchResultComponent implements OnInit {

  @Input() viewResult:boolean;
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
        alert(this.inVal.nativeElement.value);
          this.dialogText.nativeElement.innerHTML = this.inVal.nativeElement.value;
      }
      this.inVal.nativeElement.value = '';
  }

  ngOnChanges(changes: SimpleChanges) {
    if(changes.viewResult.currentValue)
    {
      this.dialogOpen();
    }
  }

}
