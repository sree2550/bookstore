import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PayModeComponent } from './pay-mode.component';

describe('PayModeComponent', () => {
  let component: PayModeComponent;
  let fixture: ComponentFixture<PayModeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PayModeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PayModeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
