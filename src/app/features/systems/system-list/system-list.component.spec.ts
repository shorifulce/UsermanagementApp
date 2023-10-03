import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SystemListComponent } from './system-list.component';

describe('SystemListComponent', () => {
  let component: SystemListComponent;
  let fixture: ComponentFixture<SystemListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SystemListComponent]
    });
    fixture = TestBed.createComponent(SystemListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
