import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { StudentComponent } from './student/student.component';
import { StudentListComponent } from './student-list/student-list.component';
import { UserManagementComponent } from './user-management/user-management.component';
import { AppRouterModule } from './router.module';


@NgModule({
  declarations: [
    AppComponent,
    LoginFormComponent,
    HomeComponent,
    AboutComponent,
    StudentComponent,
    StudentListComponent,
    UserManagementComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRouterModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
