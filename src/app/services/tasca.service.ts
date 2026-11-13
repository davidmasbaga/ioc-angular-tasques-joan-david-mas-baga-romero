import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
import { catchError, map, Observable, of, Subject, switchMap, tap } from 'rxjs';
import { adaptarTascaApi, adaptarTasquesApi, prepararTascaApi } from '../adaptadors/tasca.adaptador';
import { TascaApiResponse } from '../models/tasca-api.model';
import { EstatTasques, NovaTasca, Tasca } from '../models/tasca.model';
import { environment } from '../../environments/environment';

@Injectable({ providedIn: 'root' })
export class TascaService {
  private readonly http = inject(HttpClient);
  private readonly apiUrl = `${environment.apiUrl}/tasques`;
  private readonly estatSignal = signal<EstatTasques>({ estat: 'inicial', tasques: [] });
  private readonly recarregar$ = new Subject<void>();

  readonly estat = this.estatSignal.asReadonly();

  private readonly recarregaSubscrita = this.recarregar$.pipe(
    tap(() => this.estatSignal.set({ estat: 'carregant', tasques: [] })),
    switchMap(() => this.obtenirTasques()),
  ).subscribe((estat) => this.estatSignal.set(estat));

  carregarTot(): void {
    this.recarregar$.next();
  }

  reintentar(): void {
    this.recarregar$.next();
  }

  crearTasca(novaTasca: NovaTasca): Observable<Tasca> {
    return this.http.post<TascaApiResponse>(this.apiUrl, prepararTascaApi(novaTasca)).pipe(
      map(adaptarTascaApi),
      tap(() => this.reintentar()),
    );
  }

  private obtenirTasques(): Observable<EstatTasques> {
    return this.http.get<TascaApiResponse[]>(this.apiUrl).pipe(
      map(adaptarTasquesApi),
      map((tasques) => ({ estat: 'exit' as const, tasques })),
      catchError((error: HttpErrorResponse) => of({
        estat: 'error' as const,
        tasques: [],
        error: error.status === 0
          ? 'No es pot connectar amb l’API de tasques.'
          : 'No s’han pogut carregar les tasques.',
      })),
    );
  }
}
