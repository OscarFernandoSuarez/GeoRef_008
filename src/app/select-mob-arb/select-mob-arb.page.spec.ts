import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectMobArbPage } from './select-mob-arb.page';

describe('SelectMobArbPage', () => {
  let component: SelectMobArbPage;
  let fixture: ComponentFixture<SelectMobArbPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectMobArbPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectMobArbPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
