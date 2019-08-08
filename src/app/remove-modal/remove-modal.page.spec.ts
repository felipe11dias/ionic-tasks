import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RemoveModalPage } from './remove-modal.page';

describe('RemoveModalPage', () => {
  let component: RemoveModalPage;
  let fixture: ComponentFixture<RemoveModalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RemoveModalPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RemoveModalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
