import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddItemToCartComponent } from './add-item-to-cart.component';

describe('AddItemToCartComponent', () => {
  let component: AddItemToCartComponent;
  let fixture: ComponentFixture<AddItemToCartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddItemToCartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddItemToCartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
