import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListClassComponent } from './components/list-class/list-class.component';
import { GradesComponent } from './components/grades/grades.component';
import { PeopleComponent } from './components/people/people.component';
import { ClassworkComponent } from './components/classwork/classwork.component';
import { AssignmentCreationComponent } from './components/assignment-creation/assignment-creation.component';
import { AssignmentEditionComponent } from './components/assignment-edition/assignment-edition.component';
import { LoginComponent } from './components/login/login.component';
import { StreamComponent } from './components/stream/stream.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },

  { path: 'login', component: LoginComponent },
  { path: 'class-list', component: ListClassComponent },
  { path: 'class-detail/:id', component: StreamComponent },
  { path: 'class-detail/people/:id', component: PeopleComponent },
  { path: 'class-detail/grades/:id', component: GradesComponent },
  { path: 'class-detail/classwork/:id', component: ClassworkComponent },
  { path: 'class-detail/classwork/:id/creation', component: AssignmentCreationComponent },
  { path: 'class-detail/classwork/:id/edition', component: AssignmentEditionComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
