import { Component, ElementRef } from '@angular/core';
import {DataService} from '../../services/data.service';
import {MatDialog} from '@angular/material/dialog';
import { ClassCommentComponent } from '../class-comment/class-comment.component';

@Component({
  selector: 'app-assignment',
  templateUrl: './assignment.component.html',
  styleUrls: ['./assignment.component.css']
})
export class AssignmentComponent {

  constructor(private data: DataService,  private el: ElementRef, public dialog: MatDialog) { }


  role: string

  ngOnInit(): void {
    this.data.currentRole.subscribe(role => this.role = role);
  }

  openClassComment(): void {
    const dialogRef = this.dialog.open(ClassCommentComponent);
    dialogRef.afterClosed().subscribe(result => {});
  }

  clickedOutsideAssignmentDetail(e: Event){
    const show = this.el.nativeElement.querySelector(".assignment-detail.collapse.show")

    if(show){
      show.classList.remove('show');
    }
  }

  clickedOutsideAssignmentEditionBlock(e: Event){
    const assignmentTapEdition = this.el.nativeElement.querySelector(".tap-edition.collapse.show")

    if(assignmentTapEdition){
      assignmentTapEdition.classList.remove('show');
    }
  }
}
