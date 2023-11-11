import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HrService } from 'src/app/Services/hr.service';

@Component({
  selector: 'app-addrole',
  templateUrl: './addrole.component.html',
  styleUrls: ['./addrole.component.css']
})
export class AddroleComponent implements OnInit {
  roleForm: FormGroup | any = '';
  constructor(private formBuilder: FormBuilder, private hrService: HrService,private router: Router) { }

  ngOnInit(): void {
    this.roleForm = this.formBuilder.group({
      role: ['', Validators.required],
      gratuity: ['', Validators.required],
      pf: ['', Validators.required],
      basicPay: ['', Validators.required]
    });
  }

  addRole = () => {
    console.log(this.roleForm.value);
    if (this.roleForm.valid) {
      const roleData = this.roleForm.value;
      this.roleForm.reset();
      alert('Role -> '+ roleData.role + ' , has been added successfully');
       this.hrService.addNewRole(roleData)
         .subscribe((resp) => { 
          this.roleForm.reset(); 
        });
        this.router.navigate(['../salarybyrole']);
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
