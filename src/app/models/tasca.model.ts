export interface Tasca {
  id: string;
  nom: string;
  descripcio: string;
  categoria: string;
  data: Date;
  prioritat: number;
  recurrent: boolean;
}

export type NovaTasca = Omit<Tasca, 'id'>;

export type EstatServei = 'inicial' | 'carregant' | 'exit' | 'error';

export interface EstatTasques {
  estat: EstatServei;
  tasques: Tasca[];
  error?: string;
}

export interface CercaDesada {
  terme: string;
  categoria: string;
  data: string;
}
