//Nous importons au préalable la méthode createSlice  de redux-toolkit qui nous permettra de créer notre slice
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"; //toolkit embarque en son sein la methode 
//createAsyncThunk pour faire appel au middleware thunk
import movieApi from '../../common/apis/movieApi'
import { ApiKey } from '../../common/apis/MovieApiKey'

//On va récupérer les films de manière asynchrone
export const fetchAsyncMovies = createAsyncThunk('movies/fetchAsyncMovies', async () => {
  const response = await movieApi.get(`movie?api_key=${ApiKey}`)
  return response.data.results
})  //reduxToolkit nous créera 3 versions de notre fonction pending(en attente ou en chargement)
// fulfilled (chargement terminé avec succès)
//rejected (erreur lors du chargement)

//On crée un état initial
const initialState = {
  movies: []
}

const movieSlice = createSlice({
  name: 'movies',
  initialState,
  // reducers: {
  //   addMovies: (state, action) => {
  //     state.movies = action.payload //On peut le faire directement parceque state ici c'est un draft (comme dans la fonction produce de immer)
  //   }
  // }
  reducers: {},
  extraReducers: {
    [fetchAsyncMovies.pending]: () => {
      console.log('...En chargement')
    },
    [fetchAsyncMovies.fulfilled]: (state, { payload }) => { //les argument pour le reducer
      console.log('Chargement Complet')
      return { ...state, movies: payload }
    },
    [fetchAsyncMovies.rejected]: () => {
      console.log('Erreur lors du chargement')
    }
  }
})

export const { addMovies } = movieSlice.actions; //destructuration des actions ici addMovies on peut en mettre plusieurs
export const getAllMovies = (state) => state.movies.movies;
export default movieSlice.reducer;