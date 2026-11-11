import { Component, Input } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-tag',
  styleUrl: './tag.component.scss',
  templateUrl: './tag.component.html',
})
export class Tag {
@Input() categoria ="Nova Categoria"
  
}
