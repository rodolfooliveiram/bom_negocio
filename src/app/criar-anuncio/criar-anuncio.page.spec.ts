import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CriarAnuncioPage } from './criar-anuncio.page';

describe('CriarAnuncioPage', () => {
  let component: CriarAnuncioPage;
  let fixture: ComponentFixture<CriarAnuncioPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CriarAnuncioPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CriarAnuncioPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
