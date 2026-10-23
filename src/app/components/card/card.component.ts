import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Tag } from '../tag/tag.component';
import { Tasca } from '../../models/tasca.model';
import { DatePipe } from '@angular/common';

@Component({
  imports: [Tag, DatePipe],
  selector: 'app-card',
  styleUrl: './card.component.scss',
  templateUrl: './card.component.html',
})
export class Card {
  @Input({ required: true }) tasca!: Tasca;
  @Input() seleccionada = false;
  @Output() seleccionar = new EventEmitter<Tasca>();

  veureDetall(): void {
        this.seleccionar.emit(this.tasca);
  }
  
}
