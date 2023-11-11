import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { EmployeeService } from 'src/app/Services/employee.service';

@Component({
  selector: 'app-timesheet',
  templateUrl: './timesheet.component.html',
  styleUrls: ['./timesheet.component.css']
})
export class TimesheetComponent {
  employeeTimesheet: FormGroup | any = '';
  constructor(private formBuilder: FormBuilder, private employeeService: EmployeeService,private router: Router) { }
  signedEid=localStorage.getItem('eid');

  ngOnInit(): void {
    this.employeeTimesheet = this.formBuilder.group({
      date: ['', Validators.required],
      loginTime: ['', Validators.required],
      logoutTime: ['', Validators.required]
    });
  }

  addEmployeeTimesheet = () => {
    console.log(this.employeeTimesheet.value);
    if (this.employeeTimesheet.valid) {
      const employeeTimesheetData = this.employeeTimesheet.value;
      this.employeeTimesheet.reset();
      this.employeeService.addTimesheet(employeeTimesheetData,this.signedEid)
        .subscribe((resp) => { this.employeeTimesheet.reset(); });
    }
    alert('Your timesheet has been added successfully');
    this.router.navigate(['../allemployees/',this.signedEid]);
  };
  isLoggedInNow(): boolean {
    return !!localStorage.getItem('eid');
  }

  ishr(): boolean {
    const role=localStorage.getItem('role');
    if(role==='hr'){
      return true;
    }else{
      return false;
    }
  }
}
