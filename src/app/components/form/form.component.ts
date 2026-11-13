import { Component, EventEmitter, inject, Output } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CriterisCerca, TascaService } from '../../services/tasca.service';
import { HistorialCerquesService } from '../../services/historial-cerques.service';
import { CercaDesada } from '../../models/tasca.model';
import { termeAmbResultatsValidator } from '../../validadors/terme-amb-resultats.validator';

@Component({
  imports: [ReactiveFormsModule],
  selector: 'app-form',
  styleUrl: './form.component.scss',
  templateUrl: './form.component.html',
})
export class Form {
  private readonly tascaService = inject(TascaService);
  readonly historial = inject(HistorialCerquesService);

  @Output() filtrar = new EventEmitter<CriterisCerca>();

  readonly formulari = new FormGroup({
    terme: new FormControl('', {
      nonNullable: true,
      validators: [Validators.minLength(3)],
      asyncValidators: [termeAmbResultatsValidator(this.tascaService)],
    }),
    categoria: new FormControl('', { nonNullable: true }),
  });

  get terme(): FormControl<string> {
    
    return this.formulari.controls.terme;
  }

  get mostrarErrors(): boolean {
    
    return this.terme.invalid && (this.terme.dirty || this.terme.touched);
  }

  enviar(): void {
    if (this.formulari.invalid) {
      this.formulari.markAllAsTouched();
      return;
    }

    const criteris = this.formulari.getRawValue();
    this.historial.desar(criteris.terme, criteris.categoria);
    this.filtrar.emit(criteris);
  }

  netejar(): void {
    this.formulari.reset({ terme: '', categoria: '' });
    this.filtrar.emit({ terme: '', categoria: '' });
  }

  recuperar(cerca: CercaDesada): void {
    this.formulari.setValue({ terme: cerca.terme, categoria: cerca.categoria });
    this.filtrar.emit({ terme: cerca.terme, categoria: cerca.categoria });
  }
}
