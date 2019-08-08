import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListTasksPage } from './list-tasks.page';

describe('ListTasksPage', () => {
  let component: ListTasksPage;
  let fixture: ComponentFixture<ListTasksPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListTasksPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListTasksPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
