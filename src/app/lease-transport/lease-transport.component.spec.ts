import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeaseTransportComponent } from './lease-transport.component';

describe('LeaseTransportComponent', () => {
  let component: LeaseTransportComponent;
  let fixture: ComponentFixture<LeaseTransportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LeaseTransportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LeaseTransportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
