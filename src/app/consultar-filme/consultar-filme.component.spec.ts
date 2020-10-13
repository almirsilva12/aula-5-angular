import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultarFilmeComponent } from './consultar-filme.component';

describe('ConsultarFilmeComponent', () => {
  let component: ConsultarFilmeComponent;
  let fixture: ComponentFixture<ConsultarFilmeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsultarFilmeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultarFilmeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
