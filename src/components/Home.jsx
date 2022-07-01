import React, { useEffect } from "react";
import MovieListing from "./MovieListing";
import movieApi from '../common/apis/movieApi'
import { ApiKey } from '../common/apis/MovieApiKey'
import { addMovies } from "../fonction/movies/movieSlice";
import { useDispatch } from "react-redux";
import { fetchAsyncMovies } from "../fonction/movies/movieSlice";

const Home = () => {

  const dispatch = useDispatch() //On va dispatch notre action asynchrone

  // useEffect(() => {
  //   const fetchFilms = async () => {
  //     const response = await movieApi.get(`movie?api_key=${ApiKey}`)
  //     console.log(response.data.results)
  //     dispatch(addMovies(response.data.results))
  //   }
  //   fetchFilms()
  // }, [])

  useEffect(() => {
    dispatch(fetchAsyncMovies());
  }, [dispatch])


  return (
    <div>
      <MovieListing />
    </div>
  )
}

export default Home