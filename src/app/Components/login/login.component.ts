import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup | any = '';

  constructor(private formBuilder: FormBuilder, private userService: UserService, private router: Router) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      eid: [, Validators.required],
      password: ['', Validators.required],
      role: ['', Validators.required]
    });
  }

  submitLogin = () => {
    if (this.loginForm.valid) {
      if (this.loginForm.value.role === 'employee') {
        const loginData = this.loginForm.value;
        this.userService.loginEmployee(loginData)
          .subscribe({
            next: (resp) => {
            if (resp.eid === loginData.eid && resp.password === loginData.password) {
              alert(`Hi ${resp.firstName}! You've successfully logged in.`);
              this.loginForm.reset();
              localStorage.setItem('eid', resp.eid);
              localStorage.setItem('fname', resp.firstName);
              localStorage.setItem('role', loginData.role);
              this.router.navigate(['/home']);
            }
            else {
              alert('Invalid credentials!');
              this.loginForm.reset();
            }
          },
          error: (err) => {
            alert('Invalid credentials!');
            this.loginForm.reset();
          }

          });
      } else if (this.loginForm.value.role === 'hr') {
        const loginData = this.loginForm.value;
        this.userService.loginHr(loginData)
          .subscribe({
            next: (resp) => {
              console.log(resp);
              if (resp.hr_id === loginData.hrid && resp.password === loginData.password) {
                alert(`Hi ${resp.firstName}! You are HR and You've successfully logged in.`);
                this.loginForm.reset();
                localStorage.setItem('eid', resp.hrid);
                localStorage.setItem('role', loginData.role);
                localStorage.setItem('fname', resp.firstName);
                this.router.navigate(['/home']);
              }
              else {
                alert('Invalid credentials!');
                this.loginForm.reset();
              }
            },
            error: (err) => {
              alert('Invalid credentials!');
              this.loginForm.reset();
            }

          });
      } else {
        alert('Please check with the data you entered');
        this.loginForm.reset();
      }
    }
  };
}
