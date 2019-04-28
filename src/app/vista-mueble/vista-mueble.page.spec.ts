import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VistaMueblePage } from './vista-mueble.page';

describe('VistaMueblePage', () => {
  let component: VistaMueblePage;
  let fixture: ComponentFixture<VistaMueblePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VistaMueblePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VistaMueblePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
