### 1. Faire la classe Album

Attributs :

- artist : Artist (O)
- songsAlbum[] : Song[]
- name: string (O)
- publishedAt : Date (O)
- explicitContent : boolean (O)

Méthodes :

- addSong(song: Song): boolean
- removeSong(song: Song): void
- totalTime(): string


### 2. Gestion de la suppression d'une chanson de la playlist

Dans le component "spotifish-playlist.component.ts", ajouter pour chaque chanson un bouton rouge avec un "-" à l"intérieur, qui supprimera la chanson en question de la playlist.


### 3. Créer un component de détail d'un User

Lorsque l'on clique sur le nom de du User dans le "spotifish-playlist.component.ts", on va arriver sur le nouveau component, de nom "spotifish-user".


A l'intérieur de celui-ci, on affichera le nom de l'utilisateur, puis un label "Ses playlists" :
- Dans lequel on affichera que ses playlists "publique" (attribut visibility : true)
- Juste le nom et la date de création de la playlist

(/!\ : il faudra recrééer votre user dans ce component et des playlists (vide) qui soient publique et privée)


### 4. Créer un component de détail d'un Artiste

On y accèdera depuis la Navbar, il se nommera "spotifish-artist"

A l'intérieur de celui-ci, on affichera les albums de l'artiste :
- Nom de l'album, date de sortie, explicit content ou non (Affiché avec un 'E' si oui, rien sinon), durée totale
- Les chansons de l'album (nom + durée)

(/!\ : créer les objets nécessaires pour faire fonctionner ce component... afin d'avoir des données à afficher)









