import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IssueSubmitComponent } from './issue-submit.component';

describe('IssueSubmitComponent', () => {
  let component: IssueSubmitComponent;
  let fixture: ComponentFixture<IssueSubmitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IssueSubmitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IssueSubmitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
