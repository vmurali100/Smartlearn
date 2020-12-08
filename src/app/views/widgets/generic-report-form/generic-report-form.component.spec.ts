import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GenericReportFormComponent } from './generic-report-form.component';

describe('GenericReportFormComponent', () => {
  let component: GenericReportFormComponent;
  let fixture: ComponentFixture<GenericReportFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GenericReportFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GenericReportFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
