import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarEquipamientoComponent } from './listar-equipamiento.component';

describe('ListarEquipamientoComponent', () => {
  let component: ListarEquipamientoComponent;
  let fixture: ComponentFixture<ListarEquipamientoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListarEquipamientoComponent]
    });
    fixture = TestBed.createComponent(ListarEquipamientoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
