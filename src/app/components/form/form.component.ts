import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  imports: [FormsModule],
  selector: 'app-form',
  styleUrl: './form.component.scss',
  templateUrl: './form.component.html',
})
export class Form {
categoria = "";

@Output() filtrar = new EventEmitter<string>;

aplicarFiltre() {
  this.filtrar.emit(this.categoria)
}

}
