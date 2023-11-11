import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Hr } from 'src/app/Model/hr.model';
import { HrService } from 'src/app/Services/hr.service';

@Component({
  selector: 'app-hrdetails',
  templateUrl: './hrdetails.component.html',
  styleUrls: ['./hrdetails.component.css']
})
export class HrdetailsComponent implements OnInit {
  eId: number | any = '';
  hrData: Hr | any = '';
  signedHr=localStorage.getItem('eid');

  constructor(private actRoute: ActivatedRoute, private hrService: HrService, private router: Router) { }
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

  ngOnInit() {
    this.eId = this.actRoute.snapshot.paramMap.get('id');
    this.hrService.getHrByEid(this.signedHr)
      .subscribe(
        (resp) => {
          console.log(resp);
          this.hrData = resp;
        });
}
}
