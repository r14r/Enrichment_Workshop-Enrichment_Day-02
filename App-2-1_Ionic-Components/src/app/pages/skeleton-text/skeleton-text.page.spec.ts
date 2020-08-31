import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SkeletonTextPage } from './skeleton-text.page';

describe('SkeletonTextPage', () => {
  let component: SkeletonTextPage;
  let fixture: ComponentFixture<SkeletonTextPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SkeletonTextPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SkeletonTextPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
