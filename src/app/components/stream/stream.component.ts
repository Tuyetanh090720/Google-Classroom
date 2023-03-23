import { Component, OnInit, ElementRef } from '@angular/core';
import {DataService} from '../../shared/services/data.service';
import { IDropdownSettings } from 'ng-multiselect-dropdown';


@Component({
  selector: 'app-stream',
  templateUrl: './stream.component.html',
  styleUrls: ['./stream.component.css']
})
export class StreamComponent implements OnInit {

  constructor(private data: DataService, private el: ElementRef){}

  classDetail: boolean = true
  activeState = "Stream"
  role: string


  dropdownList: string[];
  dropdownSettings:IDropdownSettings={};
  ngOnInit() {
    this.data.classDetailSource.next(this.classDetail)

    this.dropdownList = ['Lớp 1', 'Lớp 2', 'Lớp 3'];

    this.data.activeStateSource.next(this.activeState)

    this.data.currentRole.subscribe(role => this.role = role);

  }
}
