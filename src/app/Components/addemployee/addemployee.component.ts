import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { EmployeeService } from 'src/app/Services/employee.service';

@Component({
  selector: 'app-addemployee',
  templateUrl: './addemployee.component.html',
  styleUrls: ['./addemployee.component.css']
})
export class AddemployeeComponent implements OnInit{
  employeeForm: FormGroup | any = '';
  constructor(private formBuilder: FormBuilder, private employeeService: EmployeeService,private router: Router) { }
  signedHrId=localStorage.getItem('eid');

  ngOnInit(): void {
    this.employeeForm = this.formBuilder.group({
      organization: ['', Validators.required],
      role: this.formBuilder.group({
        role: ['', Validators.required],
      }),
      department: ['', Validators.required],
      appraisal: [0, Validators.required],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      sex: ['', Validators.required],
      email: ['', Validators.required],
      dob: ['',Validators.required],
      address: ['',Validators.required],
      password: ['', Validators.required],
      dateOfJoining: ['', Validators.required]
    });
  }

  addEmployee = () => {
    console.log(this.employeeForm.value);
    if (this.employeeForm.valid) {
      const employeeData = this.employeeForm.value;
      employeeData.hrid={hrid:this.signedHrId};
      this.employeeForm.reset();
      alert('employee -> '+ employeeData.firstName + ' , has been added successfully');
       this.employeeService.addNewEmployee(employeeData)
         .subscribe((resp) => { this.employeeForm.reset(); });
         this.router.navigate(['../allemployees']);
    }else{
      alert('There is some problem in adding the role! Please try again later');
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
