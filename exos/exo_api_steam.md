
### 1. Steam Ish !

Doc de l'API : https://steam-ish.test-02.drosalys.net/api/doc


On va récupérer les différents comptes (**account**) de l'application :
- Créer les models adéquats... (?)
- Créer un component **account-index**
- Il va afficher dans un premier temps, tous les comptes de l'application (chercher la bonne URL à interroger...)
- Je veux pour chaque compte : 
  - Son nom
  - Son email
  - Son pseudo
  - Son nombre de jeux
  - Sa date de création de compte
  - L'image de son pays d'origine
- Les données seront affichées dans une table HTML, ET 20 comptes par page (pour le moment, une seule page !)


### 2. Paginez moi tout ça...


A partir du Json de l'API, faites la pagination des comptes.


### 3. Les jeux


On va récupérer les différents jeux (**game**) de l'application :
- Créer les models adéquats... (?)
- Créer un component **game-index**
- Il va afficher dans un premier temps, tous les jeux de l'application (chercher la bonne URL à interroger...)
- Je veux pour chaque jeux :
  - Son nom
  - Son image (attribut : thumbnailCover)
  - Son prix
- Les données seront affichées via un row-col de votre choix, l'idée est d'avoir des "cards" de jeux sympathique


### 4. Le mot de la fin


Installer Bootstrap :

```
npm i bootstrap
```

Penser à l'importer dans le "style.scss" :

```scss
@import "~bootstrap";
```

Et c'est tout bon !


Bon chonce





