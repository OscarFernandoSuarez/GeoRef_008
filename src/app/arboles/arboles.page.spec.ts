import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArbolesPage } from './arboles.page';

describe('ArbolesPage', () => {
  let component: ArbolesPage;
  let fixture: ComponentFixture<ArbolesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArbolesPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArbolesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
