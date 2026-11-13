# Serveis

## TascaService

Fitxer: `src/app/services/tasca.service.ts`

- Fa peticions GET i POST a /tasques.
- Guarda l'estat `inicial`, `carregant`, `exit` o `error` en un signal.
- reintentar() repeteix l'última cerca.
- switchMap s'utilitza en el flux criteris.

## HistorialCerquesService

Fitxer `src/app/services/historial-cerques.service.ts`

Desa les cerques a `localStorage` amb la clau `tasques-historial-cerques`.
Evita duplicats consectius.
 Fa servir `try/catch` per llegir i escriure.
