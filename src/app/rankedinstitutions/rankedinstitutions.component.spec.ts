import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RankedinstitutionsComponent } from './rankedinstitutions.component';

describe('RankedinstitutionsComponent', () => {
  let component: RankedinstitutionsComponent;
  let fixture: ComponentFixture<RankedinstitutionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RankedinstitutionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RankedinstitutionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
