# On va nettoyer les fichiers qui ne nous interresse pas
# On installe les packages par défaut
# Puis on installe react-redux et @reduxjs/toolkit
# Et axios vu qu'on fera des appels API
# Nous allons utiliser cette API [[http](https://www.themoviedb.org/settings/api)](https://developers.themoviedb.org/3/getting-started/introduction)

# Il faudra donc vous y connecter pour créer vos clés API

# On va créer un dossier common/apis avec 2 fichiers movieApi.js et MovieApiKey.js
# Dans movieApi.js on écrira le code pour l'accès à l'api par axios
# Dans MovieApiKey vous renseignerez votre clé
# je vais arrêter le partage pour renseigner ma clé.
# On va créer quelques composants.
# On importe nos composants dans APP

# un peu de css

# je vais arrêter le partage pour regarder le fichier qui contient ma clé API

# Le retour de l'api fonctionne
# Bon place à Redux toolkit
# On va créer un dossier fonction à l'intérieur duquel on créera un dossier movies on y mettra notre slice pour les films on l'appelera movieSlice on mettra notre store dans le dossier fonction

# Maintenant ajoutons notre store dans le main.jsx

# Maintenant écrivons le code de notre slice

# Maintenant affichons les données sur notre interface par le composant MovieListing
# On va créer un composant qui sera un élement contenant un film dans la liste de films on l'appelera MovieCard
# Problème de css

# L'objectif était de montrer comment fonctionne redux-toolkit 
# J'espère que vous avez pu assimiler la logique
# qui est plutot simple

# Rajoutons le middleware thunk 
# c'est tout aussi simple

# Testons
# Voilà c'est ainsi qu'on effectue des opérations asynchrones avec reduxjs-toolkit en implémentant thunk

# Je crée un dépôt github et je vous envoi le projet