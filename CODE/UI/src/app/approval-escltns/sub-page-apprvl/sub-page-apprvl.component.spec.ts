import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubPageApprvlComponent } from './sub-page-apprvl.component';

describe('SubPageApprvlComponent', () => {
  let component: SubPageApprvlComponent;
  let fixture: ComponentFixture<SubPageApprvlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubPageApprvlComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubPageApprvlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
