import React from 'react';
import './MovieList.css';

function MovieList() {
  const englishMovies = [
    { name: 'Movie 1', purchases: 10 },
    { name: 'Movie 2', purchases: 20 },
    { name: 'Movie 3', purchases: 5 },
  ];
  const sinhalaMovies = [
    { name: 'සිංහල චිත්‍රපට 1', purchases: 15 },
    { name: 'සිංහල චිත්‍රපට 2', purchases: 8 },
    { name: 'සිංහල චිත්‍රපට 3', purchases: 12 },
  ];
  const tamilMovies = [
    { name: 'தமிழ் திரைப்படம் 1', purchases: 25 },
    { name: 'தமிழ் திரைப்படம் 2', purchases: 18 },
    { name: 'தமிழ் திரைப்படம் 3', purchases: 6 },
  ];

  return (
    <div className="movie-list-container">
      <h2 className="movie-list-heading">Movie List</h2>
      <div className="movie-list-category">
        <h3>English Movies</h3>
        <ul className="movie-list">
          {englishMovies.map(movie => (
            <li key={movie.name}>
              {movie.name} - Purchases: {movie.purchases}
            </li>
          ))}
        </ul>
      </div>
      <div className="movie-list-category">
        <h3>Sinhala Movies</h3>
        <ul className="movie-list">
          {sinhalaMovies.map(movie => (
            <li key={movie.name}>
              {movie.name} - Purchases: {movie.purchases}
            </li>
          ))}
        </ul>
      </div>
      <div className="movie-list-category">
        <h3>Tamil Movies</h3>
        <ul className="movie-list">
          {tamilMovies.map(movie => (
            <li key={movie.name}>
              {movie.name} - Purchases: {movie.purchases}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default MovieList;