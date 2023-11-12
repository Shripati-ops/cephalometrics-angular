import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CephLibComponent } from './ceph-lib.component';

describe('CephLibComponent', () => {
  let component: CephLibComponent;
  let fixture: ComponentFixture<CephLibComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CephLibComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CephLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
