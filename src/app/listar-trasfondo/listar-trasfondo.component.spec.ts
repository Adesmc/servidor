import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarTrasfondoComponent } from './listar-trasfondo.component';

describe('ListarTrasfondoComponent', () => {
  let component: ListarTrasfondoComponent;
  let fixture: ComponentFixture<ListarTrasfondoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListarTrasfondoComponent]
    });
    fixture = TestBed.createComponent(ListarTrasfondoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
