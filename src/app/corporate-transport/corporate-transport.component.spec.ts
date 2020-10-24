import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CorporateTransportComponent } from './corporate-transport.component';

describe('CorporateTransportComponent', () => {
  let component: CorporateTransportComponent;
  let fixture: ComponentFixture<CorporateTransportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CorporateTransportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CorporateTransportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
