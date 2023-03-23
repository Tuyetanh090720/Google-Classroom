import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  classDetailSource = new BehaviorSubject<boolean>(false);
  activeStateSource = new BehaviorSubject<string>("Stream");
  roleSource = new BehaviorSubject<string>("");




  currentClassDetail = this.classDetailSource.asObservable();
  currentActiveState = this.activeStateSource.asObservable();
  currentRole = this.roleSource.asObservable();


  // có thể subcribe theo dõi thay đổi value của biến này thay cho messageSource

  constructor() { }

}

