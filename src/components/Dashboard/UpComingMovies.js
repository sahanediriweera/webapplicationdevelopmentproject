import axios from 'axios';
import React, { useEffect, useState } from 'react';
import './UpComingMovies.css';

const UpcomingMovies = () => {

  const [movies,setMovies] = useState([
    {
      id: 1,
      title: "The Matrix Resurrections",
      description: "The fourth installment in The Matrix film franchise."
    },
    {
      id: 2,
      title: "Dune",
      description: "A feature adaptation of Frank Herbert's science fiction novel, about the son of a noble family entrusted with the protection of the most valuable asset and most vital element in the galaxy."
    },
    {
      id: 3,
      title: "The French Dispatch",
      description: "A love letter to journalists set in an outpost of an American newspaper in a fictional 20th-century French city that brings to life a collection of stories published in The French Dispatch Magazine."
    }
  ]);

  useEffect(()=>{
    axios.get('https://localhost:7035/api/Home/movies')
    .then(response => {
      setMovies(response.data);
    })
    .catch(error=> {
      console.log(error);
    });
  })

  // const getData = () => {

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