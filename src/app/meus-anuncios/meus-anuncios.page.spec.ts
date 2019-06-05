import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MeusAnunciosPage } from './meus-anuncios.page';

describe('MeusAnunciosPage', () => {
  let component: MeusAnunciosPage;
  let fixture: ComponentFixture<MeusAnunciosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MeusAnunciosPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MeusAnunciosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
