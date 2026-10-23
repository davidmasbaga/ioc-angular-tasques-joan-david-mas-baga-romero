import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

export interface FiltresTasques {
  text: string;
  categoria: string;
}

@Component({
  imports: [FormsModule],
  selector: 'app-form',
  styleUrl: './form.component.scss',
  templateUrl: './form.component.html',
})
export class Form {
  text = '';
  categoria = '';

  @Output() filtrar = new EventEmitter<FiltresTasques>();

  aplicarFiltre(): void {
    this.filtrar.emit({ text: this.text.trim(), categoria: this.categoria });
  }

  restablir(): void {
    this.text = '';
    this.categoria = '';
    this.filtrar.emit({ text: '', categoria: '' });
  }
}
