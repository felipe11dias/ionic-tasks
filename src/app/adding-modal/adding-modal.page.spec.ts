import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddingModalPage } from './adding-modal.page';

describe('AddingModalPage', () => {
  let component: AddingModalPage;
  let fixture: ComponentFixture<AddingModalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddingModalPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddingModalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
