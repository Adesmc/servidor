import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarHerenciasComponent } from './listar-herencias.component';

describe('ListarHerenciasComponent', () => {
  let component: ListarHerenciasComponent;
  let fixture: ComponentFixture<ListarHerenciasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListarHerenciasComponent]
    });
    fixture = TestBed.createComponent(ListarHerenciasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
