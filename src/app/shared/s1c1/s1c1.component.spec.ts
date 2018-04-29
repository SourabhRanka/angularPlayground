import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { S1c1Component } from './s1c1.component';

describe('S1c1Component', () => {
  let component: S1c1Component;
  let fixture: ComponentFixture<S1c1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S1c1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(S1c1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
