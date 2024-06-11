import React from 'react';
import { movies } from './data';
import MovieCard from './MovieCard';
import './App.css';

const App = () => (
  <div className="app">
    <h1>Movie Website</h1>
    <div className="movie-list">
      {movies.map(movie => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </div>
  </div>
);

export default App;
  