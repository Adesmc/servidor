import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarTecnicasComponent } from './listar-tecnicas.component';

describe('ListarTecnicasComponent', () => {
  let component: ListarTecnicasComponent;
  let fixture: ComponentFixture<ListarTecnicasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListarTecnicasComponent]
    });
    fixture = TestBed.createComponent(ListarTecnicasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
