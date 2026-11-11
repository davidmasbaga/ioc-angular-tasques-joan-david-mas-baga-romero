He fet servir aquests fitxers:
- `src/app/models/tasca-api.model.ts`
- `src/app/models/tasca.model.ts`
- `src/app/adaptadors/tasca.adaptador.ts`

| API | Aplicació |
| --- | --- |
| id | id |
| nom | nom |
| descripcio | descripcio |
| categoria | categoria |
| data | data |
| prioritat | prioritat |
| recurrent | recurrent |

`src/app/adaptadors/tasca.adaptador.ts` L'adaptador neteja els textos, canvia la data a Date, normalitza la categoria i revisa la prioritat.
