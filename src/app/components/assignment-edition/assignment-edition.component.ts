import { Component, OnInit, Renderer2, ElementRef, HostListener } from '@angular/core';
import {DataService} from '../../shared/services/data.service';
import { IDropdownSettings } from 'ng-multiselect-dropdown';

@Component({
  selector: 'app-assignment-edition',
  templateUrl: './assignment-edition.component.html'
})
export class AssignmentEditionComponent implements OnInit {

  constructor(private renderer: Renderer2, private el: ElementRef, private data: DataService) { }

  dropdownList: string[];
  dropdownSettings:IDropdownSettings={};
  ngOnInit() {
    this.dropdownList = ['Lớp 1', 'Lớp 2', 'Lớp 3'];
  }
  tapAssignmentEdition: boolean

  closeTapAssignmentEdition() {
    history.back();
  }
}
