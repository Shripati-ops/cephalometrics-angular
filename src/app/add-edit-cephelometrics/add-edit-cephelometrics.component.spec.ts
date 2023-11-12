import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditCephelometricsComponent } from './add-edit-cephelometrics.component';

describe('AddEditCephelometricsComponent', () => {
  let component: AddEditCephelometricsComponent;
  let fixture: ComponentFixture<AddEditCephelometricsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEditCephelometricsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddEditCephelometricsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
