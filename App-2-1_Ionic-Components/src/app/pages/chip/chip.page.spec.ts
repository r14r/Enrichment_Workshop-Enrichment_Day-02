import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChipPage } from './chip.page';

describe('ChipPage', () => {
  let component: ChipPage;
  let fixture: ComponentFixture<ChipPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChipPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChipPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
