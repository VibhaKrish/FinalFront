import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  router: any;
  hrEid=localStorage.getItem('eid');
  
  isLoggedInNow(): boolean {
    return !!localStorage.getItem('eid');
  }

  logoutNow(): void {
    alert('Logging out...');
    localStorage.removeItem('eid');
    localStorage.removeItem('role');
    localStorage.removeItem('fname');
    this.router.navigate(['/home']);
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
