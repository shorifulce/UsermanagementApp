import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddManagementRequestComponent } from './add-management-request.component';

describe('AddManagementRequestComponent', () => {
  let component: AddManagementRequestComponent;
  let fixture: ComponentFixture<AddManagementRequestComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddManagementRequestComponent]
    });
    fixture = TestBed.createComponent(AddManagementRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
