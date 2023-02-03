# OC Projet n°12 : SportSee

## Objectifs
- Intégrer une application React à partir de maquettes.
- Développer l'application avec Typecscript.
- Mettre en place un système d'appels API vers un backend ou des données mockées.
- Affichage de données sous forme de graphiques à l'aide de la librairie Recharts.
- Utilisation des PropTypes pour un meilleur contrôle des props.
- Mise en place d'une JsDoc.

## Description
L'application SportSee permet à ses utilisateurs d'assurer un suivi des données relatives à leurs entraînements sportifs.

## Technologies
Framework :
- React

Langages :
- Typescript
- HTML
- CSS

Outils :
- Recharts
- React Router
- PropTypes
- JsDoc
- SASS

## Maquettes
La maquette est fournie par Openclassrooms : [ici](https://www.figma.com/file/BMomGVZqLZb811mDMShpLu/UI-design-Sportify-FR?node-id=0%3A1)

## Démo du site
La démo du site est disponible : [ici](https://kgabard.github.io/OC_P12_SportSee/)

## Guide d'installation et d'utilisation :
Le projet utilise des packages Node et utilise npm, donc l'installation de Node.js dans votre IDE est requise.

Une fois que Node.js a été ajouté avec succès à votre IDE, vous devrez :
- Forker ce repository.
- Le cloner localement avec `git clone`

Ensuite, vous devrez installer toutes les dépendances du projet avec `npm install`.

Pour lancer le projet il ne vous reste plus qu'à utiliser la commande : `npm start`.

En environnement de développement les requêtes API sont faite vers les données mockées locales. Si vous le souhaitez vous pouvez faire vos requêtes API vers le backend en ligne présent [ici](https://oc-p12-sportsee-backend.onrender.com).

Pour cela il vous suffit de faire cette modification dans le fichiers "src/scripts/api/SportSeeApi.ts" :

Avant :
```js
  constructor() {
    if (process.env.NODE_ENV === 'development') {
      this._url = 'mockData/user/'
      this._sufix = '.json'
    } else {
      this._url = 'https://oc-p12-sportsee-backend.onrender.com/user/'
      this._sufix = ''
    }
  }
```

Après :
```js
  constructor() {
    if (process.env.NODE_ENV !== 'development') {
      this._url = 'mockData/user/'
      this._sufix = '.json'
    } else {
      this._url = 'https://oc-p12-sportsee-backend.onrender.com/user/'
      this._sufix = ''
    }
  }
```

## Règles de convention de nommage pour ce projet :

### SCSS :
Pour les noms de variables et de classes : `kebab-case`
```
  ex: .user-page{...}
  ex: $highlight-primary: #ff0101
```

### JS :
Pour les noms de variables et de fonctions : `camelCase`
```
  ex: const caloriesCoef = 0.2
  ex: function convertDuration(duration) {...}
```

Pour les classes et interfaces : `PascalCase`
```
  ex: class AverageSessions {...}
  ex: interface UserDataType {...}
```

JH : 5