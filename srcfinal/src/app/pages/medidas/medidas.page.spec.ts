import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MedidasPage } from './medidas.page';

describe('MedidasPage', () => {
  let component: MedidasPage;
  let fixture: ComponentFixture<MedidasPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MedidasPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MedidasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
