import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenericReportDetailsComponent } from './generic-report-details.component';

describe('GenericReportDetailsComponent', () => {
  let component: GenericReportDetailsComponent;
  let fixture: ComponentFixture<GenericReportDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GenericReportDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GenericReportDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
