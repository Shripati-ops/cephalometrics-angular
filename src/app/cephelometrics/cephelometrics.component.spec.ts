import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CephelometricsComponent } from './cephelometrics.component';

describe('CephelometricsComponent', () => {
  let component: CephelometricsComponent;
  let fixture: ComponentFixture<CephelometricsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CephelometricsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CephelometricsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
