import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowModalPage } from './show-modal.page';

describe('ShowModalPage', () => {
  let component: ShowModalPage;
  let fixture: ComponentFixture<ShowModalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowModalPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowModalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
