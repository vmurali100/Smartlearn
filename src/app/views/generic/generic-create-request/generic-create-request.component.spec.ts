import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GenericCreateRequestComponent } from './generic-create-request.component';

describe('GenericCreateRequestComponent', () => {
  let component: GenericCreateRequestComponent;
  let fixture: ComponentFixture<GenericCreateRequestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GenericCreateRequestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GenericCreateRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
