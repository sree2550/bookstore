import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BooksPaymentComponent } from './books-payment.component';

describe('BooksPaymentComponent', () => {
  let component: BooksPaymentComponent;
  let fixture: ComponentFixture<BooksPaymentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BooksPaymentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BooksPaymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
