import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditSystemComponent } from './edit-system.component';

describe('EditSystemComponent', () => {
  let component: EditSystemComponent;
  let fixture: ComponentFixture<EditSystemComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditSystemComponent]
    });
    fixture = TestBed.createComponent(EditSystemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
