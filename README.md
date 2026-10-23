# Gestor de tasques

## Autor

Joan David Mas-Bagà Romero

## Descripció

Aplicació web desenvolupada amb Angular per gestionar i organitzar tasques del meu cicle formatiu

## Versions utilitzades

* Node.js 24
* Angular 22
* Angular CLI 22
* Git

## Com crear i executar el projecte

Instal·lar les dependències:

```bash
npm install o npm i
```

Executar l'aplicació en mode desenvolupament:

```bash
ng serve
```
o també podem utilitzar 
```bash
npm run start
```

L'aplicació estarà disponible a `http://localhost:4200`.

Altres comandes disponibles:

```bash
npm run build
npm test
```

## Branca de treball

La branca corresponent a aquesta activitat és `ra2-components`.

## Components creats

- `app-form`: permet filtrar les tasques per text i categoria.
- `app-llista`: mostra les tasques filtrades i el detall de la tasca seleccionada.
- `app-card`: presenta la informació resumida d'una tasca i permet seleccionar-la.
- `app-tag`: mostra visualment la categoria de cada tasca.

## Accessibilitat i disseny responsive

- Inclou un enllaç de salt al contingut principal, focus visible en controls interactius i etiquetes associades als camps del formulari.
- El recompte de resultats s'anuncia amb una regió d'estat i els errors de validació s'anuncien com a alertes.
- En pantalles de `768px` o menys, les seccions de dades i el detall de tasques passen a una sola columna per evitar desbordaments.

## Repositori

https://github.com/davidmasbaga/ioc-angular-tasques-joan-david-mas-baga-romero
