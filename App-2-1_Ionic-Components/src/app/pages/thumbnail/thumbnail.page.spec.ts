import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThumbnailPage } from './thumbnail.page';

describe('ThumbnailPage', () => {
  let component: ThumbnailPage;
  let fixture: ComponentFixture<ThumbnailPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThumbnailPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThumbnailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
