import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApprovalEscltnsComponent } from './approval-escltns.component';

describe('ApprovalEscltnsComponent', () => {
  let component: ApprovalEscltnsComponent;
  let fixture: ComponentFixture<ApprovalEscltnsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApprovalEscltnsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApprovalEscltnsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
