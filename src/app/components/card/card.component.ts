import { Component, Input } from '@angular/core';
import { Tag } from '../tag/tag.component';
import { Tasca } from '../../models/tasca.model';
import { TASQUES_MOCK } from '../../data/tasques.mock';
import { DatePipe } from '@angular/common';

@Component({
  imports: [Tag, DatePipe],
  selector: 'app-card',
  styleUrl: './card.component.scss',
  templateUrl: './card.component.html',
})
export class Card {
  @Input()
  tasca!: Tasca;

}
