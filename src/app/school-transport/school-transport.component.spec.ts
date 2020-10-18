import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SchoolTransportComponent } from './school-transport.component';

describe('SchoolTransportComponent', () => {
  let component: SchoolTransportComponent;
  let fixture: ComponentFixture<SchoolTransportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SchoolTransportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SchoolTransportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
