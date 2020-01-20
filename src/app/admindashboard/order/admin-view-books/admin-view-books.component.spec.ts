import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminViewBooksComponent } from './admin-view-books.component';

describe('AdminViewBooksComponent', () => {
  let component: AdminViewBooksComponent;
  let fixture: ComponentFixture<AdminViewBooksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminViewBooksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminViewBooksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
