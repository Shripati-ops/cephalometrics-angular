import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CephListComponent } from './ceph-list.component';

describe('CephListComponent', () => {
  let component: CephListComponent;
  let fixture: ComponentFixture<CephListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CephListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CephListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
