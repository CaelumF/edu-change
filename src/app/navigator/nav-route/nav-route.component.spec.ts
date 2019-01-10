import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavRouteComponent } from './nav-route.component';

describe('NavRouteComponent', () => {
  let component: NavRouteComponent;
  let fixture: ComponentFixture<NavRouteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavRouteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavRouteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
