import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateEmployeeRequestComponent } from './update-employee-request.component';

describe('UpdateEmployeeRequestComponent', () => {
  let component: UpdateEmployeeRequestComponent;
  let fixture: ComponentFixture<UpdateEmployeeRequestComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpdateEmployeeRequestComponent]
    });
    fixture = TestBed.createComponent(UpdateEmployeeRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
