import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminViewCustomerComponent } from './admin-view-customer.component';

describe('AdminViewCustomerComponent', () => {
  let component: AdminViewCustomerComponent;
  let fixture: ComponentFixture<AdminViewCustomerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminViewCustomerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminViewCustomerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
