import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Leave } from 'src/app/Model/leave.model';
import { EmployeeService } from 'src/app/Services/employee.service';
import { HrService } from 'src/app/Services/hr.service';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css']
})
export class NotificationComponent implements OnInit {
  getPendingLeave: Leave | any;
  getAllLeave: Leave | any;
  signedEid=localStorage.getItem('eid');

  constructor(private hrService: HrService, private router:Router, private employeeService: EmployeeService) { }

  ngOnInit(): void {
    this.hrService.getPendingLeave()
      .subscribe({
        next: (resp) => { 
          this.getPendingLeave=resp;
      },
      error: (err) => {
        alert('sorry! there is some problem in retrieving the leave list. Please try again after some time');
      },
    });

    this.employeeService.getAllLeave(this.signedEid)
      .subscribe({
        next: (resp) => { 
          this.getAllLeave=resp;
          console.log(this.getAllLeave);
      },
      error: (err) => {
        alert('sorry! there is some problem in retrieving the leave list. Please try again after some time');
      },
    });
    }

  approveReject(eid:any,status: string): any{
    this.hrService.approveReject(eid,status)
    .subscribe({
      next: () => {
        alert(`The leave status with ID = ${eid} has been ${status}`);
        this.router.navigate(['../home']);
      },
      error: () => {
        alert(`An error occurred when trying to ${status} the employee with ID = ${eid}.Please try again later!`)
      }
    })
  }

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
