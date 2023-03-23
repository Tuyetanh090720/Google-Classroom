import { Component, OnInit } from '@angular/core';
import {DataService} from '../../shared/services/data.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private data: DataService,) { }

  ngOnInit(): void {
  }

  value: string;

  tapRoles:boolean = false

  role: string

  showRoles(){
    this.tapRoles = true
  }

  changeRoleTeacher(){
    this.role='teacher'

    this.data.roleSource.next(this.role)
  }

  changeRoleStudent(){
    this.role='student'

    this.data.roleSource.next(this.role)
  }

}
