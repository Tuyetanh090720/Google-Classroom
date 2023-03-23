import { Component, OnInit, Renderer2, ElementRef, HostListener } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { HeaderComponent } from '../../shared/global-components/header/header.component';

@Component({
  selector: 'app-class-join',
  templateUrl: './class-join.component.html',
  styleUrls: ['./class-join.component.css']
})
export class ClassJoinComponent implements OnInit {

  constructor(private renderer: Renderer2, private el: ElementRef, public dialogRef: MatDialogRef<HeaderComponent>) { }

  ngOnInit(): void {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
