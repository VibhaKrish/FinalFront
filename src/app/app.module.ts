import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import {HttpClientModule} from '@angular/common/http'; 
import { NgxSpinnerModule } from 'ngx-spinner';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { FooterComponent } from './Components/footer/footer.component';
import { HomeComponent } from './Components/home/home.component';
import { LoginComponent } from './Components/login/login.component';
import { AboutusComponent } from './Components/aboutus/aboutus.component';
import { Page404Component } from './Components/page404/page404.component';
import { NotificationComponent } from './Components/notification/notification.component';
import { SignupComponent } from './Components/signup/signup.component';
import { ContactComponent } from './Components/contact/contact.component';
import { AllemployeesComponent } from './Components/allemployees/allemployees.component';
import { EmployeedetailsComponent } from './Components/employeedetails/employeedetails.component';
import { AddemployeeComponent } from './Components/addemployee/addemployee.component';
import { TimesheetComponent } from './Components/timesheet/timesheet.component';
import { AddleaveComponent } from './Components/addleave/addleave.component';
import { SalarybyroleComponent } from './Components/salarybyrole/salarybyrole.component';
import { AddroleComponent } from './Components/addrole/addrole.component';
import { HrdetailsComponent } from './Components/hrdetails/hrdetails.component';
import { UpdateemployeeComponent } from './Components/updateemployee/updateemployee.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    LoginComponent,
    AboutusComponent,
    Page404Component,
    NotificationComponent,
    SignupComponent,
    ContactComponent,
    AllemployeesComponent,
    EmployeedetailsComponent,
    AddemployeeComponent,
    TimesheetComponent,
    AddleaveComponent,
    SalarybyroleComponent,
    AddroleComponent,
    HrdetailsComponent,
    UpdateemployeeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    HttpClientModule ,
    NgxSpinnerModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
