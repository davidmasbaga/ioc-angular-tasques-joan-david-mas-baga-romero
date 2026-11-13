import { AbstractControl, AsyncValidatorFn, ValidationErrors } from '@angular/forms';
import { catchError, map, Observable, of, switchMap, timer } from 'rxjs';
import { TascaService } from '../services/tasca.service';

export function termeAmbResultatsValidator(tascaService: TascaService): AsyncValidatorFn {
    return (control: AbstractControl): Observable<ValidationErrors | null> => {
    const terme = (control.value ?? '').toString().trim();

    if (terme.length < 3) {
      return of(null);
    }

    return timer(400).pipe(
      switchMap(() => tascaService.comptarResultats(terme)),
      map((resultats) => resultats > 0 ? null : { senseResultats: true }),
      catchError(() => of({ senseResultats: true })),
    );
  };
}
