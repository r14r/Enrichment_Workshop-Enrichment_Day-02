import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BackButtonPage } from './back-button.page';

describe('BackButtonPage', () => {
  let component: BackButtonPage;
  let fixture: ComponentFixture<BackButtonPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BackButtonPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BackButtonPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
