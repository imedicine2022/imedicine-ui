import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrescriptionDialogBoxComponent } from './prescription-dialog-box.component';

describe('PrescriptionDialogBoxComponent', () => {
  let component: PrescriptionDialogBoxComponent;
  let fixture: ComponentFixture<PrescriptionDialogBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrescriptionDialogBoxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrescriptionDialogBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
