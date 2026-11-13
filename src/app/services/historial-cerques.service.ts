import { Injectable, signal } from '@angular/core';
import { CercaDesada } from '../models/tasca.model';

@Injectable({ providedIn: 'root' })
export class HistorialCerquesService {
  private readonly clauStorage = 'tasques-historial-cerques';
  private readonly historialSignal = signal<CercaDesada[]>(this.llegir());

  readonly historial = this.historialSignal.asReadonly();

  desar(terme: string, categoria: string): void {
    const termeNormalitzat = terme.trim();
    if (termeNormalitzat.length < 3) return;

    const novaCerca: CercaDesada = {
      terme: termeNormalitzat,
      categoria,
      data: new Date().toISOString(),
    };
    const anterior = this.historialSignal()[0];
    if (anterior?.terme === novaCerca.terme && anterior.categoria === novaCerca.categoria) return;

    const historial = [novaCerca, ...this.historialSignal()].slice(0, 8);
    this.historialSignal.set(historial);
    this.escriure(historial);
  }

  netejar(): void {
    this.historialSignal.set([]);
    this.escriure([]);
  }

  private llegir(): CercaDesada[] {
    try {
      const contingut = localStorage.getItem(this.clauStorage);
      if (!contingut) return [];

      const dades: unknown = JSON.parse(contingut);
      if (!Array.isArray(dades)) return [];
      return dades.filter(this.esCercaValida).slice(0, 8);
    } catch {
      return [];
    }
  }

  private escriure(historial: CercaDesada[]): void {
    try {
      localStorage.setItem(this.clauStorage, JSON.stringify(historial));
    } catch {
      // Si localStorage no està disponible, l'aplicació continua funcionant.
    }
  }

  private esCercaValida(valor: unknown): valor is CercaDesada {
    return typeof valor === 'object' && valor !== null
      && typeof (valor as CercaDesada).terme === 'string'
      && typeof (valor as CercaDesada).categoria === 'string'
      && typeof (valor as CercaDesada).data === 'string';
  }
}
