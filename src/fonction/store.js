import { configureStore } from "@reduxjs/toolkit"; //Comme on l'a dit dans l'exemple précédent on commence par importer la méthode configureStore
import moviesReducer from './movies/movieSlice'

export const store = configureStore({ //Donc on crée notre store en renseignant les paramètres
  // du reducer et de l'état global qui sera accessible par le champ movies
  reducer: {
    movies: moviesReducer
  }
})