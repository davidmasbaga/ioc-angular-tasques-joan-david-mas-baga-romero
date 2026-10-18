import { Component, Input } from '@angular/core';
import { TASQUES_MOCK } from '../../data/tasques.mock';
import { Card } from '../card/card.component';
import { Tasca } from '../../models/tasca.model';
import { Form } from '../form/form.component';

@Component({
  imports: [Card, Form],
  selector: 'app-llista',
  styleUrl: './llista.component.scss',
  templateUrl: './llista.component.html',
})
export class Llista {
 @Input() elements: Tasca[] = [];
 @Input() titol = 'Llista d’elements';
 categoria="";


 get tasquesFiltrades(){
  
  return this.elements.filter(tasca=> !this.categoria || tasca.categoria === this.categoria);
  
 }

 

 filtre(categoria:string){
  this.categoria =categoria;

 }

}
