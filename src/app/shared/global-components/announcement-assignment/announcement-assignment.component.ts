import { Component } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { ClassCommentComponent } from '../class-comment/class-comment.component';

@Component({
  selector: 'app-announcement-assignment',
  templateUrl: './announcement-assignment.component.html'
})
export class AnnouncementAssignmentComponent {

  constructor(public dialog: MatDialog){}

  openClassComment(): void {
    const dialogRef = this.dialog.open(ClassCommentComponent);
    dialogRef.afterClosed().subscribe(result => {});
  }
}
