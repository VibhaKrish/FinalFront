import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Role } from '../Model/role.model';
import { Observable } from 'rxjs';
import { Hr } from '../Model/hr.model';
import { Leave } from '../Model/leave.model';

@Injectable({
  providedIn: 'root'
})
export class HrService {
  getSalaryByRoleApi: string = 'http://localhost:8082/salary/get-all-salary';
  postRoleApi: string = 'http://localhost:8082/salary/add-salary';
  deleteRoleApi: string = 'http://localhost:8082/salary/delete-salary';
  getHrByEidApi:string = 'http://localhost:8082/hr/get-hr-details';
  getPendingLeaveApi: string = 'http://localhost:8082/hr/view-pending-leave-request';
  postApproveRejectApi: string = 'http://localhost:8082/hr/change-leave-status';

  constructor(private http: HttpClient) { }

  getSalaryByRole = (): Observable<Role[]> => {
    return this.http.get<Role[]>(this.getSalaryByRoleApi);
  };

  getPendingLeave=(): Observable<Leave> => {
    return this.http.get<Leave>(this.getPendingLeaveApi);
  }

  approveReject = (eid: any, status: string): Observable<any> => {
    return this.http.post<any>(`${this.postApproveRejectApi}/${status}/${eid}`,eid);
  };

  addNewRole = (newRole: Role): Observable<Role> => {
    return this.http.post<Role>(this.postRoleApi, newRole);
  };

  deleteRole(role: string): Observable<{}> {
    return this.http.delete(`${this.deleteRoleApi}/${role}`)
  }

  getHrByEid(eid: any): Observable<Hr> {
    return this.http.get<Hr>(`${this.getHrByEidApi}/${eid}`);
  }
}
