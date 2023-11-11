import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/Services/employee.service';

@Component({
  selector: 'app-allemployees',
  templateUrl: './allemployees.component.html',
  styleUrls: ['./allemployees.component.css']
})

export class AllemployeesComponent implements OnInit {
  loading = false;
  allEmployees: any[]=[];
  filteredEmployees: any[] = [];
  searchValue: string = '';
  
  constructor(private employeeService: EmployeeService) { }

  ngOnInit(): void {
    this.loading = true;
    this.employeeService.getAllEmployees()
      .subscribe({
        next: (resp) => { 
        this.allEmployees = resp;
        this.filteredEmployees=resp;
        setTimeout(()=>{this.loading = false;},500);
      },
      error: (err) => {
        this.loading = false;
        alert('sorry! there is some problem in retrieving the employee list. Please try again after some time');
      },
    });
    }

   

    filterEmployees() {
      this.filteredEmployees = this.allEmployees.filter((employee) => {
        return employee.firstName.toLowerCase().includes(this.searchValue.toLowerCase());
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
