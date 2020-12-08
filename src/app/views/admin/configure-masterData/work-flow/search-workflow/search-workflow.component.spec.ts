import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchWorkflowComponent } from './search-workflow.component';

describe('SearchWorkflowComponent', () => {
  let component: SearchWorkflowComponent;
  let fixture: ComponentFixture<SearchWorkflowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchWorkflowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchWorkflowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
