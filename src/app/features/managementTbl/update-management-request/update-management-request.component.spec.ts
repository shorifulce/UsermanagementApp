import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateManagementRequestComponent } from './update-management-request.component';

describe('UpdateManagementRequestComponent', () => {
  let component: UpdateManagementRequestComponent;
  let fixture: ComponentFixture<UpdateManagementRequestComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpdateManagementRequestComponent]
    });
    fixture = TestBed.createComponent(UpdateManagementRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
