import React from 'react';

const UpcomingMovies = () => {
  const movies = [
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
  ];

  return (
    <div>
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