import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnRentTransportComponent } from './on-rent-transport.component';

describe('OnRentTransportComponent', () => {
  let component: OnRentTransportComponent;
  let fixture: ComponentFixture<OnRentTransportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OnRentTransportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OnRentTransportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
