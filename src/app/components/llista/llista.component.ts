import { Component, inject, OnInit } from '@angular/core';
import { Card } from '../card/card.component';
import { Tasca } from '../../models/tasca.model';
import { FiltresTasques, Form } from '../form/form.component';
import { TascaService } from '../../services/tasca.service';

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
  text = '';
  categoria = '';
  tascaSeleccionada?: Tasca;

  get tasquesFiltrades(): Tasca[] {
    const textNormalitzat = this.text.toLocaleLowerCase();

    return this.estat().tasques.filter((tasca) => {
      const coincideixText = !textNormalitzat
        || tasca.nom.toLocaleLowerCase().includes(textNormalitzat)
        || tasca.descripcio.toLocaleLowerCase().includes(textNormalitzat);
      const coincideixCategoria = !this.categoria || tasca.categoria === this.categoria;
      return coincideixText && coincideixCategoria;
    });
  }

  ngOnInit(): void {
    this.tascaService.carregarTot();
  }

  filtre(filtres: FiltresTasques): void {
    this.tascaSeleccionada = undefined;
    this.text = filtres.text;
    this.categoria = filtres.categoria;
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
