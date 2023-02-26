import axios from 'axios';
import React, { useEffect, useState } from 'react';
import './UpComingMovies.css';

const UpcomingMovies = ({movies}) => {


  return (
    <div className="upcoming-movies">
      <h2>Upcoming Movies</h2>
      <ul>
        {movies.map(movie => (
          <li key={movie.id}>
            <h3>{movie.title}</h3>
            <p>{movie.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UpcomingMovies;