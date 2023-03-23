import { Component, OnInit } from '@angular/core';
import {DataService} from '../../shared/services/data.service';


@Component({
  selector: 'app-grades',
  templateUrl: './grades.component.html',
  styleUrls: ['./grades.component.css']
})
export class GradesComponent implements OnInit {

  constructor(private data: DataService) { }

  classDetail: boolean = true
  activeState = "Grades"

  ngOnInit(): void {
    this.data.classDetailSource.next(this.classDetail)

    this.data.activeStateSource.next(this.activeState)

  }

}
