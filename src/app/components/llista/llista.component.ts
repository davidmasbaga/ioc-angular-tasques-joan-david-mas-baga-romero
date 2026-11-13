import { Component, inject, OnInit } from '@angular/core';
import { Card } from '../card/card.component';
import { Tasca } from '../../models/tasca.model';
import { Form } from '../form/form.component';
import { CriterisCerca, TascaService } from '../../services/tasca.service';

@Component({
  imports: [Card, Form],
  selector: 'app-llista',
  styleUrl: './llista.component.scss',
  templateUrl: './llista.component.html',
})
export class Llista implements OnInit {
  private readonly tascaService = inject(TascaService);

  readonly estat = this.tascaService.estat;
  titol = 'Les meves tasques';
  tascaSeleccionada?: Tasca;

  ngOnInit(): void {
    this.tascaService.carregarTot();
  }

  filtre(filtres: CriterisCerca): void {
    this.tascaSeleccionada = undefined;
    this.tascaService.cercar(filtres);
  }

  seleccionarTasca(tasca: Tasca): void {
    this.tascaSeleccionada = tasca;
  }

  tancarDetall(): void {
    this.tascaSeleccionada = undefined;
  }

  reintentar(): void {
    this.tascaService.reintentar();
  }
}
