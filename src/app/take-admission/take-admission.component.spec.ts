import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TakeAdmissionComponent } from './take-admission.component';

describe('TakeAdmissionComponent', () => {
  let component: TakeAdmissionComponent;
  let fixture: ComponentFixture<TakeAdmissionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TakeAdmissionComponent]
    });
    fixture = TestBed.createComponent(TakeAdmissionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
