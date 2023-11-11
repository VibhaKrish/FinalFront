import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeService } from 'src/app/Services/employee.service';

@Component({
  selector: 'app-updateemployee',
  templateUrl: './updateemployee.component.html',
  styleUrls: ['./updateemployee.component.css']
})
export class UpdateemployeeComponent {
  eId: number | any;
  existingData: any;

  constructor(
    private route: ActivatedRoute,
    private employeeService: EmployeeService,
    private router: Router
  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.eId = +params['id'];
      this.fetchExistingData();
    });
  }

  fetchExistingData() {
    this.employeeService. getEmployeeByEid(this.eId).subscribe(data => {
      this.existingData = data;
    });
  }

  updateEmployeeData(updatedData: any) {
    updatedData.value.eid=this.eId;
    if(localStorage.getItem('role')==='employee'){
      updatedData.value.role={ role: this.existingData.role.role};
      updatedData.value.organization=this.existingData.organization;
      updatedData.value.department=this.existingData.department;
      updatedData.value.appraisal=this.existingData.appraisal;
      updatedData.value.dateOfJoining=this.existingData.dateOfJoining;
      updatedData.value.hrid={hrid: this.existingData.hrid.hrid};
    }else{
      updatedData.value.role = { role: updatedData.value.role };
      updatedData.value.hrid={hrid: localStorage.getItem('hr')};
    }
    
    console.log(updatedData.value);
    this.employeeService.updateEmployeeData(updatedData.value).subscribe(response => {
      alert('Data updated successfully:');
      this.router.navigate(['../allemployees/',this.eId]);
    }, error => {
      alert('Error updating data:');
    });
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
