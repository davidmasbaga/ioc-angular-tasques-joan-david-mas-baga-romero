import { Component, Input } from '@angular/core';
import { Card } from '../card/card.component';
import { Tasca } from '../../models/tasca.model';
import { FiltresTasques, Form } from '../form/form.component';

@Component({
  imports: [Card, Form],
  selector: 'app-llista',
  styleUrl: './llista.component.scss',
  templateUrl: './llista.component.html',
})
export class Llista {
 @Input() elements: Tasca[] = [];
 @Input() titol = 'Llista d’elements';
  text = '';
  categoria = '';


 get tasquesFiltrades(){
  
    const textNormalitzat = this.text.toLocaleLowerCase();

    return this.elements.filter((tasca) => {
      const coincideixText = !textNormalitzat
        || tasca.nom.toLocaleLowerCase().includes(textNormalitzat)
        || tasca.descripcio.toLocaleLowerCase().includes(textNormalitzat);
      const coincideixCategoria = !this.categoria || tasca.categoria === this.categoria;

      return coincideixText && coincideixCategoria;
    });
  
 }

 

  filtre(filtres: FiltresTasques): void {
    this.text = filtres.text;
    this.categoria = filtres.categoria;
  }

}
