import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TogglePage } from './toggle.page';

describe('TogglePage', () => {
  let component: TogglePage;
  let fixture: ComponentFixture<TogglePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TogglePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TogglePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
