import {Tasca} from "../models/tasca.model" 


export const TASQUES_MOCK: Tasca[] = [

{
    id: 1,
    nom: 'Estudiar Angular',
    descripcio: 'Repassar els components i els serveis',
    categoria: 'Estudis',
    data: new Date('2026-10-19'),
    prioritat: 3,
    recurrent: true
  },
  {
    id: 2,
    nom: 'Fer exercici',
    descripcio: 'Sessió entrenament al gimnàs',
    categoria: 'Salut',
    data: new Date('2026-10-19'),
    prioritat: 2,
    recurrent: true
  },
  {
    id: 3,
    nom: 'Comprar aliments',
    descripcio: 'Comprar fruita, verdura i altres aliments',
    categoria: 'Personal',
    data: new Date('2026-10-20'),
    prioritat: 2,
    recurrent: true
  },
  {
    id: 4,
    nom: 'Lliurar EAC2',
    descripcio: 'Revisar el model i les dades mock',
    categoria: 'Estudis',
    data: new Date('2026-10-21'),
    prioritat: 3,
    recurrent: false
  },
  {
    id: 5,
    nom: 'Revisar el correu',
    descripcio: 'Llegir i respondre els missatges pendents',
    categoria: 'Feina',
    data: new Date('2026-10-20'),
    prioritat: 1,
    recurrent: true
  },
  {
    id: 6,
    nom: 'Llegir un llibre',
    descripcio: 'Llegir durant trenta minuts',
    categoria: 'Oci',
    data: new Date('2026-10-22'),
    prioritat: 1,
    recurrent: true
  },
  {
    id: 7,
    nom: 'Preparar una reunió',
    descripcio: 'Organitzar els punts que cal tractar',
    categoria: 'Feina',
    data: new Date('2026-10-23'),
    prioritat: 3,
    recurrent: false
  },
  {
    id: 8,
    nom: 'Netejar lhabitació',
    descripcio: 'Ordenar lescriptori i els armaris',
    categoria: 'Casa',
    data: new Date('2026-10-24'),
    prioritat: 2,
    recurrent: true
  },
  {
    id: 9,
    nom: 'Fer una passejada',
    descripcio: 'Caminar a laire lliure',
    categoria: 'Salut',
    data: new Date('2026-10-25'),
    prioritat: 1,
    recurrent: true
  },
  {
    id: 10,
    nom: 'Planificar la setmana',
    descripcio: 'Organitzar les tasques de la setmana següent',
    categoria: 'Organització',
    data: new Date('2026-10-25'),
    prioritat: 3,
    recurrent: true
  }

]