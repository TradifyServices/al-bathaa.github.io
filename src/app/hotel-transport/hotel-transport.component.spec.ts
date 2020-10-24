import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HotelTransportComponent } from './hotel-transport.component';

describe('HotelTransportComponent', () => {
  let component: HotelTransportComponent;
  let fixture: ComponentFixture<HotelTransportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HotelTransportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HotelTransportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
