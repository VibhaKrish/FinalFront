import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from '../Model/employee.model';
import { Attendence } from '../Model/attendence.model';
import { Leave } from '../Model/leave.model';

@Injectable({
  providedIn: 'root'
})

export class EmployeeService {
  getAllEmpApi: string = 'http://localhost:8082/hr/get-all-emps';
  getEmpApi: string = 'http://localhost:8082/employee/get-employee';
  postAddEmpApi: string = 'http://localhost:8082/hr/add-emp';
  deleteEmpApi: string = ' http://localhost:8082/hr/delete-emp';
  getAttendenceApi: string = 'http://localhost:8082/employee/get-percentage-attendance';
  postEmployeeApi: string = 'http://localhost:8082/hr/update-emp';
  getSalaryApi: string = 'http://localhost:8082/salary/get-salary-by-role';
  postTimesheet: string = 'http://localhost:8082/employee/add-attendance';
  postLeaveApi: string = 'http://localhost:8082/employee/apply-leave';
  getLeaveBalanceApi: string = 'http://localhost:8082/employee/get-all-leaves';
  getAllLeaveApi: string = 'http://localhost:8082/employee/get-all-leaves';

  constructor(private http: HttpClient) { }

  getAllEmployees = (): Observable<Employee[]> => {
    return this.http.get<Employee[]>(this.getAllEmpApi);
  };

  getEmployeeByEid(eid: number): Observable<Employee> {
    return this.http.get<Employee>(`${this.getEmpApi}/${eid}`);
  }

  addNewEmployee = (newEmployee: Employee): Observable<Employee> => {
    return this.http.post<Employee>(this.postAddEmpApi, newEmployee);
  };

  addTimesheet = (timesheetData: any,eid: any): Observable<any> => {
    return this.http.post(`${this.postTimesheet}/${eid}`,timesheetData);
  };

  addLeave = (LeaveData: any,eid: any): Observable<any> => {
    return this.http.post(`${this.postLeaveApi}/${eid}`,LeaveData);
  };

  getSalary(role: string): Observable<any> {
    return this.http.get(`${this.getSalaryApi}/${role}`); 
  }

  deleteEmployee(eid: number): Observable<{}> {
    return this.http.delete(`${this.deleteEmpApi}/${eid}`)
  }

  getAttendence(eid: number): Observable<Employee>{
    return this.http.get<Employee>(`${this.getAttendenceApi}/${eid}`);
  }

  getLeaveBalance(eid: number): Observable<Leave>{
    return this.http.get<Leave>(`${this.getLeaveBalanceApi}/${eid}`);
  }

  getAllLeave(eid: any): Observable<Leave>{
    return this.http.get<Leave>(`${this.getAllLeaveApi}/${eid}`);
  }

  updateEmployeeData(updatedData: any): Observable<any> {
    return this.http.post(`${this.postEmployeeApi}`, updatedData);
  }
}
