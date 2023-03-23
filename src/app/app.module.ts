import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ClickOutsideModule } from 'ng-click-outside';
import { FormsModule } from '@angular/forms';
import { DataService} from './shared/services/data.service';
import { EditorModule } from '@tinymce/tinymce-angular';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/global-components/header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './components/login/login.component';
import { ListClassComponent } from './components/list-class/list-class.component';
import { ClassCreationComponent } from './components/class-creation/class-creation.component';
import { ClassEditionComponent } from './components/class-edition/class-edition.component';
import { ClassJoinComponent } from './components/class-join/class-join.component';
import { StreamComponent } from './components/stream/stream.component';
import { GradesComponent } from './components/grades/grades.component';
import { PeopleComponent } from './components/people/people.component';
import { ClassworkComponent } from './components/classwork/classwork.component';
import { AssignmentCreationComponent } from './components/assignment-creation/assignment-creation.component';
import { AssignmentEditionComponent } from './components/assignment-edition/assignment-edition.component';
import { MatDialogModule} from '@angular/material/dialog';
import { ClassCommentComponent } from './shared/global-components/class-comment/class-comment.component';
import { AnnouncementComponent } from './shared/global-components/announcement/announcement.component';
import { AnnouncementAssignmentComponent } from './shared/global-components/announcement-assignment/announcement-assignment.component';
import { AssignmentComponent } from './shared/global-components/assignment/assignment.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ListClassComponent,
    ClassCreationComponent,
    ClassEditionComponent,
    ClassJoinComponent,
    GradesComponent,
    StreamComponent,
    PeopleComponent,
    ClassworkComponent,
    AssignmentCreationComponent,
    AssignmentEditionComponent,
    LoginComponent,
    ClassCommentComponent,
    AnnouncementComponent,
    AnnouncementAssignmentComponent,
    AssignmentComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ClickOutsideModule,
    FormsModule,
    EditorModule,
    NgbModule,
    BrowserAnimationsModule,
    NgMultiSelectDropDownModule.forRoot(),
    MatDialogModule,
  ],
  providers: [DataService,],
  bootstrap: [AppComponent]
})
export class AppModule { }
