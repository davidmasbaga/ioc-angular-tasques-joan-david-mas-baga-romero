# Gestor de tasques

Aplicació Angular per gestionar tasques amb una API local.

## Versions

- Node.js 24
- npm 11
- Angular 22
- Angular CLI 22

## Comandes

```bash
npm install
npm run api
npm start
npm run build
npm test
```

L'API s'executa a `http://localhost:4301` i l'aplicació a `http://localhost:4200`.

## Branca

La branca de treball és `ra3-serveis`.

## API

- Fitxer JSON: `tools/api/tasques.json`
- Endpoint: `GET` i `POST /tasques`
- URL base: `http://localhost:4301`

## Serveis

- `TascaService`: fa les peticions HTTP, cerca, reintenta i guarda l'estat de càrrega o error.
- `HistorialCerquesService`: desa les cerques recents a `localStorage`.

## Formulari

El formulari de cerca usa `ReactiveFormsModule`, té validació mínima, validació asíncrona i historial de cerques.
