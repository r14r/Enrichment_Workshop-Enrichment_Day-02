import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LearningCSSPage } from './learning-css.page';

describe('LearningCSSPage', () => {
  let component: LearningCSSPage;
  let fixture: ComponentFixture<LearningCSSPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LearningCSSPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LearningCSSPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
