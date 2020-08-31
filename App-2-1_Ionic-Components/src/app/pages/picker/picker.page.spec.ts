import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PickerPage } from './picker.page';

describe('PickerPage', () => {
  let component: PickerPage;
  let fixture: ComponentFixture<PickerPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PickerPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PickerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
