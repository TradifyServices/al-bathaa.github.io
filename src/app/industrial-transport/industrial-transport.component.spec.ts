import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndustrialTransportComponent } from './industrial-transport.component';

describe('IndustrialTransportComponent', () => {
  let component: IndustrialTransportComponent;
  let fixture: ComponentFixture<IndustrialTransportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IndustrialTransportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IndustrialTransportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
