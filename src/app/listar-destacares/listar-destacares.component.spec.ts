import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarDestacaresComponent } from './listar-destacares.component';

describe('ListarDestacaresComponent', () => {
  let component: ListarDestacaresComponent;
  let fixture: ComponentFixture<ListarDestacaresComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListarDestacaresComponent]
    });
    fixture = TestBed.createComponent(ListarDestacaresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
