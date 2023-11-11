import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalarybyroleComponent } from './salarybyrole.component';

describe('SalarybyroleComponent', () => {
  let component: SalarybyroleComponent;
  let fixture: ComponentFixture<SalarybyroleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SalarybyroleComponent]
    });
    fixture = TestBed.createComponent(SalarybyroleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
