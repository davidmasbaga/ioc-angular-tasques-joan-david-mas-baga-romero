import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
import { catchError, map, Observable, of, Subject, switchMap, tap } from 'rxjs';
import { adaptarTascaApi, adaptarTasquesApi, prepararTascaApi } from '../adaptadors/tasca.adaptador';
import { TascaApiResponse } from '../models/tasca-api.model';
import { EstatTasques, NovaTasca, Tasca } from '../models/tasca.model';
import { environment } from '../../environments/environment';

export interface CriterisCerca {
  terme: string;
  categoria: string;
}

@Injectable({ providedIn: 'root' })
export class TascaService {
  private readonly http = inject(HttpClient);
  private readonly apiUrl = `${environment.apiUrl}/tasques`;
  private readonly estatSignal = signal<EstatTasques>({ estat: 'inicial', tasques: [] });
  private readonly criteris$ = new Subject<CriterisCerca>();
  private ultimCriteri: CriterisCerca = { terme: '', categoria: '' };

  readonly estat = this.estatSignal.asReadonly();

  private readonly cercaSubscrita = this.criteris$.pipe(
    tap(() => this.estatSignal.set({ estat: 'carregant', tasques: [] })),
    switchMap((criteris) => this.obtenirTasques(criteris)),
  ).subscribe((estat) => this.estatSignal.set(estat));

  carregarTot(): void {
    this.cercar({ terme: '', categoria: '' });
  }

  cercar(criteris: CriterisCerca): void {
    this.ultimCriteri = { terme: criteris.terme.trim(), categoria: criteris.categoria };
    this.criteris$.next(this.ultimCriteri);
  }

  reintentar(): void {
    this.cercar(this.ultimCriteri);
  }

  comptarResultats(terme: string): Observable<number> {
    const text = terme.trim().toLocaleLowerCase();
    return this.http.get<TascaApiResponse[]>(this.apiUrl).pipe(
      map(adaptarTasquesApi),
      map((tasques) => tasques.filter((tasca) =>
        tasca.nom.toLocaleLowerCase().includes(text)
        || tasca.descripcio.toLocaleLowerCase().includes(text),
      ).length),
      catchError(() => of(0)),
    );
  }

  crearTasca(novaTasca: NovaTasca): Observable<Tasca> {
    return this.http.post<TascaApiResponse>(this.apiUrl, prepararTascaApi(novaTasca)).pipe(
      map(adaptarTascaApi),
      tap(() => this.reintentar()),
    );
  }

  private obtenirTasques(criteris: CriterisCerca): Observable<EstatTasques> {
    return this.http.get<TascaApiResponse[]>(this.apiUrl).pipe(
      map(adaptarTasquesApi),
      map((tasques) => this.filtrarTasques(tasques, criteris)),
      map((tasques) => ({ estat: 'exit' as const, tasques })),
      catchError((error: HttpErrorResponse) => of({
        estat: 'error' as const,
        tasques: [],
        error: error.status === 0 ? 'No es pot connectar amb l’API de tasques.' : 'No s’han pogut carregar les tasques.',
      })),
    );
  }

  private filtrarTasques(tasques: Tasca[], criteris: CriterisCerca): Tasca[] {
    const text = criteris.terme.toLocaleLowerCase();
    return tasques.filter((tasca) => {
      const coincideixText = !text || tasca.nom.toLocaleLowerCase().includes(text)
        || tasca.descripcio.toLocaleLowerCase().includes(text);
      return coincideixText && (!criteris.categoria || tasca.categoria === criteris.categoria);
    });
  }
}
