import { Component, OnInit, ElementRef } from '@angular/core';
import {DataService} from '../../shared/services/data.service';


@Component({
  selector: 'app-classwork',
  templateUrl: './classwork.component.html',
  styleUrls: ['./classwork.component.css']
})
export class ClassworkComponent implements OnInit {

  constructor(private data: DataService,  private el: ElementRef) { }

  classDetail: boolean = true

  activeState = "Classwork"

  role: string


  ngOnInit(): void {
    this.data.classDetailSource.next(this.classDetail)

    this.data.activeStateSource.next(this.activeState)

    this.data.currentRole.subscribe(role => this.role = role);

  }

  clickedOutsideAssignmentOptionBlock(e: Event){
    const assignmentOptionBlock = this.el.nativeElement.querySelector(".assignment-option-block.collapse.show")

    if(assignmentOptionBlock){
      assignmentOptionBlock.classList.remove('show');
    }
  }
}
