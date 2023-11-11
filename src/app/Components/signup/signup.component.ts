import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  registerHrForm: FormGroup | any = '';

  constructor(private formBuilder: FormBuilder, private userService: UserService, private router: Router) { }

  ngOnInit(): void {
    this.registerHrForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      password: ['', Validators.required],
      email: ['', Validators.required],
      dob: ['', Validators.required]
    });
  }

  submitHrRegister = () => {
    if (this.registerHrForm.valid) {
      const registerData = this.registerHrForm.value;
      this.userService.register(registerData)
        .subscribe((resp) => {
          alert(`Hi ${resp.firstName}! You've successfully registered. Redirecting to login...`);
          this.registerHrForm.reset();
          this.router.navigate(['login']);
        });
    }
  };
}
