import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PoAdminComponent } from './po-admin.component';

describe('PoAdminComponent', () => {
  let component: PoAdminComponent;
  let fixture: ComponentFixture<PoAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PoAdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PoAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
