import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarHabilidadesComponent } from './listar-habilidades.component';

describe('ListarHabilidadesComponent', () => {
  let component: ListarHabilidadesComponent;
  let fixture: ComponentFixture<ListarHabilidadesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListarHabilidadesComponent]
    });
    fixture = TestBed.createComponent(ListarHabilidadesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
