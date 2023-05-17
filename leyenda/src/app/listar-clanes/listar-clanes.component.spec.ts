import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListarClanesComponent } from './listar-clanes.component';

describe('ListarClanesComponent', () => {
  let component: ListarClanesComponent;
  let fixture: ComponentFixture<ListarClanesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListarClanesComponent]
    });
    fixture = TestBed.createComponent(ListarClanesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
