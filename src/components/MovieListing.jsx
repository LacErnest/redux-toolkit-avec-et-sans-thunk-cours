import React from "react";
import { useSelector } from "react-redux";
import { getAllMovies } from "../fonction/movies/movieSlice";
import MovieCard from './MovieCard'
import '../App.css'

const MovieListing = () => {

  //On récupère les films
  const movies = useSelector(getAllMovies);
  console.log(movies)
  return (
    <div className="movie-wrapper">
      <div className="movie-list">
        <h2>Liste des Films</h2>
        <div className="movie-container">
          {movies && movies.length && movies.map(movie => <MovieCard key={movie.id} data={movie} />)}
        </div>
      </div>
    </div>
  )
}

export default MovieListing