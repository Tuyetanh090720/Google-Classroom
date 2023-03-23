import { Component, OnInit,  HostListener, ElementRef, Renderer2} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { ListClassComponent } from '../list-class/list-class.component';


@Component({
  selector: 'app-class-edition',
  templateUrl: './class-edition.component.html',
  styleUrls: ['./class-edition.component.css']
})
export class ClassEditionComponent implements OnInit {

  constructor( private renderer: Renderer2,private el: ElementRef, public dialogRef: MatDialogRef<ListClassComponent>) { }

  ngOnInit(): void {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
