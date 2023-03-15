import React from 'react';
import './MovieList.css';

function MovieList({englishMovies,sinhalaMovies,tamilMovies}) {
  
  return (
    <div className="movie-list-container">
      <h2 className="movie-list-heading">Movie List</h2>
      <div className="movie-list-category">
        <h3>English Movies</h3>
        <ul className="movie-list">
          {englishMovies.map(movie => (
            <li key={movie.name}>
              {movie.name} - Cost: {movie.purchases}
            </li>
          ))}
        </ul>
      </div>
      <div className="movie-list-category">
        <h3>Sinhala Movies</h3>
        <ul className="movie-list">
          {sinhalaMovies.map(movie => (
            <li key={movie.name}>
              {movie.name} - Cost: {movie.purchases}
            </li>
          ))}
        </ul>
      </div>
      <div className="movie-list-category">
        <h3>Tamil Movies</h3>
        <ul className="movie-list">
          {tamilMovies.map(movie => (
            <li key={movie.name}>
              {movie.name} - Cost: {movie.purchases}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default MovieList;