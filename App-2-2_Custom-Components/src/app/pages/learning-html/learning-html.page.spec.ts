import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LearningHTMLPage } from './learning-html.page';

describe('LearningHTMLPage', () => {
  let component: LearningHTMLPage;
  let fixture: ComponentFixture<LearningHTMLPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LearningHTMLPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LearningHTMLPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
