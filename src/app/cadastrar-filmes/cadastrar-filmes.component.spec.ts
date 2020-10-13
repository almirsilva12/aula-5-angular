import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastrarFilmesComponent } from './cadastrar-filmes.component';

describe('CadastrarFilmesComponent', () => {
  let component: CadastrarFilmesComponent;
  let fixture: ComponentFixture<CadastrarFilmesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CadastrarFilmesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastrarFilmesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
