import { Component, OnInit, Renderer2, ElementRef, HostListener } from '@angular/core';
import {DataService} from '../../services/data.service';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { ClassCreationComponent } from '../../../components/class-creation/class-creation.component';
import { ClassJoinComponent } from '../../../components/class-join/class-join.component';
import { BooleanInput } from '@angular/cdk/coercion';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private renderer: Renderer2, private el: ElementRef, private data: DataService,public dialog: MatDialog) { }

  classDetail:BooleanInput

  activeState:string;

  role: string

  ngOnInit(): void {
    this.data.currentClassDetail.subscribe(classDetail => this.classDetail = classDetail);

    this.data.currentActiveState.subscribe(activeState => this.activeState = activeState);

    this.data.currentRole.subscribe(role => this.role = role);

    console.log(this.role)
  }

  // show hide menu
  menu:boolean = false

  showMainMenu() {
    this.menu = true
  }

  clickedOutsideMenu(e: Event) {
    this.menu = false
  }

  // tap bar active
  setStateAsActive(state:any) {
    this.activeState = state;
    console.log(this.activeState)
  }

  // hide collapse

  clickedOutsideTapCreation(e: Event){
    const show = this.el.nativeElement.querySelector(".collapse1tc.collapse.show")

    if(show){
      show.classList.remove('show');
    }
  }

  // show hide popup

  openClassCreation(): void {
    const dialogRef = this.dialog.open(ClassCreationComponent);
    dialogRef.afterClosed().subscribe(result => {});
  }

  openClassJoin(): void {
    const dialogRef = this.dialog.open(ClassJoinComponent);
  }

}
