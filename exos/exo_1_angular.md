### 1. Faire un compteur


- Il commence à 0
- On doit pouvoir l'incrémenter de 1 et de 5 (en positif et négatif)
- On doit pouvoir le reset (retour à 0)
- De plus, il change de couleur en fonction de sa valeur :
  - 0 : jaune
  - Entre 1 et 15, il sera vert clair (#4af778)
  - Entre 16 et 25, il sera vert (#00ff44)
  - 26 et plus, il sera vert foncé (#009c29)
  - Entre -1 et -15, il sera rouge clair (#c23844)
  - Entre -16 et -25, il sera rouge (#ff0016)
  - -26 et plus, il sera rouge foncé (#ab000f)


### 2. Yatzee`

Au tour du Yatzee maintenant, mais qu'est-ce que le Yatzee ?  https://fr.wikipedia.org/wiki/Yahtzee


### 2.1. Yatzee - Créer les classes métiers


Créer une classe "Dice" :
- attributs :
  - value: number = 1 
  - image: string = ''
- constructor :
  - déterminer une valeur aléatoire entre 1 et 6, et affectera le résultat à l'attribut "value"
  - on changera ensuite son image => une string du chemin de l'image à sélectionner : 'assets/dices/xx.png'

Créer une classe Yatzee :
- attributs :
  - dices: Dice[] = []
- méthodes :
  - start =>
    - ajouter dans le tableau de dé du Yatzee, 5 instances de Dice


### 2.2. Yatzee - Afficher le Yatzee

Dans le app.component ajouter un attribut Yatzee, instanciez le.

Dans l'html du component faire :
- un bouton qui appelera la méthode "start" de notre Yatzee
- et si le tableau de dé du Yatzee n'est pas vide, alors on affichera les 5 images des dés

