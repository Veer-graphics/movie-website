import React from 'react';

const MovieCard = ({ movie }) => (
  <div className="movie-card">
    <img src={movie.poster} alt={`${movie.title} poster`} />
    <h2>{movie.title}</h2>
    <p>{movie.year}</p>
  </div>
);

export default MovieCard;
