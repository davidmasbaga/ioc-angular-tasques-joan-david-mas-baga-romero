import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Llista } from './llista.component';

describe('Llista', () => {
  let component: Llista;
  let fixture: ComponentFixture<Llista>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Llista],
    }).compileComponents();

    fixture = TestBed.createComponent(Llista);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
