import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearFichaComponent } from './crear-ficha.component';

describe('CrearFichaComponent', () => {
  let component: CrearFichaComponent;
  let fixture: ComponentFixture<CrearFichaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CrearFichaComponent]
    });
    fixture = TestBed.createComponent(CrearFichaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
