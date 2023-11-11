import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { EmployeeService } from 'src/app/Services/employee.service';

@Component({
  selector: 'app-addleave',
  templateUrl: './addleave.component.html',
  styleUrls: ['./addleave.component.css']
})
export class AddleaveComponent {
  employeeLeave: FormGroup | any = '';
  constructor(private formBuilder: FormBuilder, private employeeService: EmployeeService,private router:Router) { }
  leaveDate:any[]=[];

  ngOnInit(): void {
    this.employeeLeave = this.formBuilder.group({
      leaveType: ['', Validators.required],
      leaveDate:this.formBuilder.group({
        from: ['', Validators.required],
        to: ['', Validators.required]
      }),
      numDays: [, Validators.required]
    });
  }
  
  addEmployeeLeave = () => {
    if (this.employeeLeave.valid) {
      const employeeLeaveData = this.employeeLeave.value;
      console.log(employeeLeaveData);
      this.employeeLeave.reset();
      alert('Your Leave has been added successfully! Please wait for your HR to respond');
      this.employeeService.addLeave(employeeLeaveData,localStorage.getItem('eid'))
        .subscribe((resp) => {  this.employeeLeave.reset(); });
        this.router.navigate(['../home']);
    }
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
