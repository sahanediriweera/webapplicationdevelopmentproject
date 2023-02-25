import React from 'react';
import './YourMovies.css';

// const movies = [
//     {
//       title: 'The Godfather',
//       purchases: 100
//     },
//     {
//       title: 'Star Wars',
//       purchases: 200
//     },
//     {
//       title: 'The Avengers',
//       purchases: 150
//     }
//   ];

const YourMovies = ({movies}) => {


    return (
        <div className="movies-container">
          <h2>Your Movies</h2>
          <ul>
            {movies.map((movie, index) => (
              <li key={index}>
                <span>{movie.title}</span>
                <span>Purchases: {movie.purchases}</span>
              </li>
            ))}
          </ul>
        </div>
    );

}

export default YourMovies