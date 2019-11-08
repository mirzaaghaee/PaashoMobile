import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaphomePage } from './maphome.page';

describe('MaphomePage', () => {
  let component: MaphomePage;
  let fixture: ComponentFixture<MaphomePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaphomePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaphomePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
