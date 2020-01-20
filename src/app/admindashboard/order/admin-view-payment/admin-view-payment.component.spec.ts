import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminViewPaymentComponent } from './admin-view-payment.component';

describe('AdminViewPaymentComponent', () => {
  let component: AdminViewPaymentComponent;
  let fixture: ComponentFixture<AdminViewPaymentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminViewPaymentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminViewPaymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
