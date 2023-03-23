import { Component, OnInit, Input, ElementRef, HostListener, Inject  } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { Head } from 'rxjs';
import { HeaderComponent } from '../../shared/global-components/header/header.component';

@Component({
  selector: 'app-class-creation',
  templateUrl: './class-creation.component.html',
  styleUrls: ['./class-creation.component.css']
})
export class ClassCreationComponent implements OnInit {

  constructor(private el: ElementRef, public dialogRef: MatDialogRef<HeaderComponent>) {  }
  classCreation: boolean
  popupCreationQuestion: boolean = true
  popupCreation: boolean = false

  ngOnInit(): void {
  }
  showPopupCreation: boolean

  showCreation(){
    this.popupCreation = true;

    console.log("show creation")

    const popup= this.el.nativeElement.querySelector(".popup-creation-question")
    popup.style.display = "none"
  }


  onNoClick(): void {
    this.dialogRef.close();
  }

}
