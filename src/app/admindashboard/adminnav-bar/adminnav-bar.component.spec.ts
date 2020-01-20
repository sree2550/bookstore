import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminnavBarComponent } from './adminnav-bar.component';

describe('AdminnavBarComponent', () => {
  let component: AdminnavBarComponent;
  let fixture: ComponentFixture<AdminnavBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminnavBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminnavBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
