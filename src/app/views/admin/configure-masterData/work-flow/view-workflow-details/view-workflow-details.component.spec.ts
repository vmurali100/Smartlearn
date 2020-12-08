import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewWorkflowDetailsComponent } from './view-workflow-details.component';

describe('ViewWorkflowDetailsComponent', () => {
  let component: ViewWorkflowDetailsComponent;
  let fixture: ComponentFixture<ViewWorkflowDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewWorkflowDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewWorkflowDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
