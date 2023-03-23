import { Component, OnInit, Renderer2, ElementRef, HostListener } from '@angular/core';
import {DataService} from '../../shared/services/data.service';
import { IDropdownSettings } from 'ng-multiselect-dropdown';


@Component({
  selector: 'app-assignment-creation',
  templateUrl: './assignment-creation.component.html'
})
export class AssignmentCreationComponent implements OnInit {

  constructor(private renderer: Renderer2, private el: ElementRef, private data: DataService) { }

  dropdownList: string[];
  dropdownSettings:IDropdownSettings={};
  ngOnInit() {
    this.dropdownList = ['Lớp 1', 'Lớp 2', 'Lớp 3'];
  }

  tapAssignmentCreation: boolean

  closeTapAssignmentCreation() {
    history.back();
  }

}
