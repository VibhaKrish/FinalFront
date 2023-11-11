import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HrService } from 'src/app/Services/hr.service';

@Component({
  selector: 'app-salarybyrole',
  templateUrl: './salarybyrole.component.html',
  styleUrls: ['./salarybyrole.component.css']
})
export class SalarybyroleComponent {
  salaryByRole: any[]=[];
  
  constructor(private http: HttpClient,private hrService: HrService,private router: Router) { }

  ngOnInit(): void {
    this.hrService.getSalaryByRole()
      .subscribe({
        next: (resp) => {
          console.log(resp);
        this.salaryByRole = resp;
      },
      error: (err) => {
        alert('sorry! there is some problem in retrieving the role list. Please try again after some time');
      },
    });
    }

    deleteRole(role: string): void {
      if(confirm(`Role to be removed: ${role}`)){
      this.hrService.deleteRole(role)
         .subscribe({
            next: () => {
              alert(`The Role = ${role} have been removed.`);
              window.location.reload();
            },
            error: () => {
               alert(`An error occurred when trying to remove the Role = ${role}. this role cannot be deleted since there are employees with this role!`)
            }
          })
        }
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
