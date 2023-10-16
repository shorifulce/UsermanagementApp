import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEmployeeRequestComponent } from './add-employee-request.component';

describe('AddEmployeeRequestComponent', () => {
  let component: AddEmployeeRequestComponent;
  let fixture: ComponentFixture<AddEmployeeRequestComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddEmployeeRequestComponent]
    });
    fixture = TestBed.createComponent(AddEmployeeRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
