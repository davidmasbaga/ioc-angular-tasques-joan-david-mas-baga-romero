import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Llista } from './components/llista/llista.component';
import { TASQUES_MOCK } from './data/tasques.mock';

@Component({
  imports: [RouterOutlet, Llista],
  selector: 'app-root',
  styleUrl: './app.component.scss',
  templateUrl: './app.component.html',
})
export class App {
  protected readonly title = signal('Gestor de tasques');
  public nomApp=  "Gestor de tasques";
  elements = TASQUES_MOCK;
}
