import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactComponent } from './contact/contact.component';
import { DashboardComponent } from './dash-board/dashboard.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AttendanceComponent } from './attendance/attendance.component';
import { LeavesComponent } from './leaves/leaves.component';
import { Page404Component } from './page404/page404.component';
import { ProfileComponent } from './profile/profile.component';
import { Home1Component } from './ExternalModule/home1/home1.component';
import { UploadfileComponent } from './FileApi/uploadfile/uploadfile.component';
import { HttpClientModule } from '@angular/common/http';
import { CreateemployeeComponent } from './Employee/create-emp/createemployee/createemployee.component';
import { EmpdetailsComponent } from './Employee/employee-details/empdetails.component';
import { EmplistComponent } from './Employee/employee-list/emplist.component';
import { EmpupdateComponent } from './Employee/employee-update/empupdate.component';

@NgModule({
  declarations: [
    AppComponent,
    ContactComponent,
    DashboardComponent,
    HomeComponent,
    LoginComponent,
    LogoutComponent,
    Home1Component,
    AttendanceComponent,
    LeavesComponent,
    Page404Component,
    ProfileComponent,
    UploadfileComponent,
    CreateemployeeComponent,
    EmpdetailsComponent,
    EmplistComponent,
    EmpupdateComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
