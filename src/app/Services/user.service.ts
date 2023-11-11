import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, shareReplay } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  employeeUrl: string = 'http://localhost:8082/employee/get-employee';
  hrUrl: string= 'http://localhost:8082/hr/get-hr-details';
  hrRegisterUrl: string = 'http://localhost:8082/hr/add-hr';

  constructor(private http: HttpClient) { }
  
  register = (registerData: any): Observable<any> => {
    console.log(registerData);
    return this.http.post(this.hrRegisterUrl, registerData)
      .pipe(shareReplay(1, 20000))
  };

  loginEmployee = (loginData: any): Observable<any> => {
    console.log(loginData);
    return this.http.get(`${this.employeeUrl}/${loginData.eid}`);
  };

  loginHr = (loginData: any): Observable<any> => {
    console.log(loginData);
    return this.http.get(`${this.hrUrl}/${loginData.eid}`);
  };
}
