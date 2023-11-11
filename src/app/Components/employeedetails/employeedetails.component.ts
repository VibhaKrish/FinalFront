import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from 'src/app/Model/employee.model';
import { EmployeeService } from 'src/app/Services/employee.service';
import * as pdfMake from 'pdfmake/build/pdfmake';
import * as pdfFonts from 'pdfmake/build/vfs_fonts';
import { Leave } from 'src/app/Model/leave.model';

(pdfMake as any).vfs = pdfFonts.pdfMake.vfs;

@Component({
  selector: 'app-employeedetails',
  templateUrl: './employeedetails.component.html',
  styleUrls: ['./employeedetails.component.css']
})
export class EmployeedetailsComponent {
  loading = false;
  eId: number | any = '';
  empData: Employee | any = '';
  salaryData: any;
  attendencePercentage: number | any = '';
  leaveBalance: Leave | any = '';



  constructor(private actRoute: ActivatedRoute, private employeeService: EmployeeService, private router: Router) { }

  ngOnInit() {
    this.loading = true;
    this.eId = this.actRoute.snapshot.paramMap.get('id');
    this.employeeService.getEmployeeByEid(this.eId)
      .subscribe(
        (resp) => {
          this.empData = resp;
          this.loadSalaryData(resp.role.role);
        });
    this.employeeService.getAttendence(this.eId)
      .subscribe(
        (resp) => {
          this.attendencePercentage = resp;
        }
      );
    this.employeeService.getLeaveBalance(this.eId)
      .subscribe(
        (resp) => {
          this.leaveBalance = resp;
        }
      );
    setTimeout(() => { this.loading = false; }, 500);
    
  }

  


  deleteEmployee(eid: number): void {
    this.employeeService.deleteEmployee(eid)
      .subscribe({
        next: () => {
          alert(`The employee with ID = ${eid} have been removed.`);
          this.router.navigate(['../allemployees']);
        },
        error: () => {
          alert(`An error occurred when trying to remove the employee with ID = ${eid}.Please try again later!`)
        }
      })
  }

  loadSalaryData(role: string): void {
    this.employeeService.getSalary(role).subscribe((response) => {
      console.log(response);
      this.salaryData = response;
    });
  }

  generatePDF(appraisal: number): void {
    const salary = this.salaryData[0].basicPay + (appraisal / 100) * this.salaryData[0].basicPay;
    const pdfDefinition = {
      content: [
        'THE SALARY DETAILS : ',
        'Salary: ', JSON.stringify(salary),
        'Details: ',
        'Appraisal: ', JSON.stringify(appraisal),
        'basic pay: ', JSON.stringify(this.salaryData[0].basicPay),
        'pf: ', JSON.stringify(this.salaryData[0].pf),
        'gratuity: ', JSON.stringify(this.salaryData[0].gratuity)
      ]
    };

    pdfMake.createPdf(pdfDefinition).download('SalaryData.pdf');
  }

  isLoggedInNow(): boolean {
    return !!localStorage.getItem('eid');
  }

  ishr(): boolean {
    const role = localStorage.getItem('role');
    if (role === 'hr') {
      return true;
    } else {
      return false;
    }
  }
}

