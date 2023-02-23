import axios from 'axios';
import React, { useState } from 'react';
import './UpComingMovies.css';

const UpcomingMovies = ({movies}) => {

  // const getData = () => {
  //   axios.get('https://localhost:7035/api/Home/movies')
  //   .then(response => {
  //     setMovies(response.data);
  //   })
  //   .catch(error=> {
  //     console.log(error);
  //   });
  // };

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