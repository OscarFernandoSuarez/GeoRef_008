import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarinventarioPage } from './agregarinventario.page';

describe('AgregarinventarioPage', () => {
  let component: AgregarinventarioPage;
  let fixture: ComponentFixture<AgregarinventarioPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgregarinventarioPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgregarinventarioPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
