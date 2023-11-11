import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './Components/login/login.component';
import { HomeComponent } from './Components/home/home.component';
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

const routes: Routes = [
  { path: 'home', component: HomeComponent},
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: 'login', component: LoginComponent},
  { path: 'contact', component: ContactComponent},
  { path: 'aboutus', component: AboutusComponent},
  { path: 'notification', component: NotificationComponent},
  { path: 'allemployees', component: AllemployeesComponent},
  { path: 'addemployee', component: AddemployeeComponent},
  { path: 'allemployees/:id/timesheet', component: TimesheetComponent},
  { path: 'allemployees/:id/addleave', component: AddleaveComponent},
  { path: 'salarybyrole', component: SalarybyroleComponent},
  { path: 'salarybyrole/addrole', component: AddroleComponent},
  { path: 'allemployees/:id', component:EmployeedetailsComponent},
  { path: 'hr/:id', component:HrdetailsComponent},
  { path: 'allemployees/:id/updateemployee', component:UpdateemployeeComponent},
  { path: 'signup', component: SignupComponent},
  { path: 'hrdetails', component: HrdetailsComponent},
  { path: '**',component: Page404Component}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
