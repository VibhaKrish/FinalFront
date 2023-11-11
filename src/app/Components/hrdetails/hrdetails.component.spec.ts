import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HrdetailsComponent } from './hrdetails.component';

describe('HrdetailsComponent', () => {
  let component: HrdetailsComponent;
  let fixture: ComponentFixture<HrdetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HrdetailsComponent]
    });
    fixture = TestBed.createComponent(HrdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
