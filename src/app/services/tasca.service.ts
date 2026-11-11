import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
import { map } from 'rxjs';
import { adaptarTasquesApi } from '../adaptadors/tasca.adaptador';
import { TascaApiResponse } from '../models/tasca-api.model';
import { Tasca } from '../models/tasca.model';
import { environment } from '../../environments/environment';

@Injectable({ providedIn: 'root' })
export class TascaService {
  private readonly http = inject(HttpClient);
  private readonly tasquesInternes = signal<Tasca[]>([]);

  readonly tasques = this.tasquesInternes.asReadonly();

  carregarTasques(): void {
    this.http.get<TascaApiResponse[]>(`${environment.apiUrl}/tasques`).pipe(
      map(adaptarTasquesApi),
    ).subscribe({
      next: (tasques) => this.tasquesInternes.set(tasques),
      error: () => this.tasquesInternes.set([]),
    });
  }
}
