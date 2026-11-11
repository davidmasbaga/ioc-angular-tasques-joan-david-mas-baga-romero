import { TascaApiResponse } from '../models/tasca-api.model';
import { Tasca } from '../models/tasca.model';

const CATEGORIES_NORMALITZADES: Record<string, string> = {
  casa: 'Casa', estudis: 'Estudis', feina: 'Feina', oci: 'Oci',
  organitzacio: 'Organització', 'organització': 'Organització',
  personal: 'Personal', salut: 'Salut',
};

function textNet(valor: string, perDefecte: string): string {
  return valor.trim() || perDefecte;
}

function categoriaNormalitzada(categoria: string): string {
  const neta = textNet(categoria, 'Sense categoria');
  return CATEGORIES_NORMALITZADES[neta.toLocaleLowerCase()] ?? neta;
}

function dataSegura(data: string): Date {
  const dataNormalitzada = new Date(data.trim());
  return Number.isNaN(dataNormalitzada.getTime()) ? new Date('2000-01-01') : dataNormalitzada;
}

function prioritatSegura(prioritat: number): number {
  const valor = Number(prioritat);
  return Number.isFinite(valor) ? Math.min(3, Math.max(1, valor)) : 1;
}

export function adaptarTascaApi(tascaApi: TascaApiResponse): Tasca {
  return {
    id: textNet(tascaApi.id, 'sense-id'),
    nom: textNet(tascaApi.nom, 'Tasca sense nom'),
    descripcio: textNet(tascaApi.descripcio, 'Sense descripció'),
    categoria: categoriaNormalitzada(tascaApi.categoria),
    data: dataSegura(tascaApi.data),
    prioritat: prioritatSegura(tascaApi.prioritat),
    recurrent: Boolean(tascaApi.recurrent),
  };
}

export function adaptarTasquesApi(tasquesApi: TascaApiResponse[]): Tasca[] {
  return tasquesApi.map(adaptarTascaApi);
}
