import axios from 'axios';
import React, { useState } from 'react';
import './SellerMovieList.css';

const SellerMovieList = () => {

  const [movies,setMovies] = useState([
    {
      id: 1,
      title: 'The Godfather',
      image: 'https://via.placeholder.com/150',
      description:
        'The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.',
    },
    {
      id: 2,
      title: 'Star Wars',
      image: 'https://via.placeholder.com/150',
      description: 'The epic space opera film series created by George Lucas.',
    },
    {
      id: 3,
      title: 'The Avengers',
      image: 'https://via.placeholder.com/150',
      description: 'A team of superheroes, the Avengers, band together to fight off intergalactic threats.',
    },
  ]);

  const getMovies = ()=> {
    axios.get('https://localhost:7035/api/Home/getmovies')
    .then(response=> {
      setMovies(response.data);
    })
    .catch(err=> {
      console.log(err);
    });
  };

    const handleEdit = (id) => {
        console.log(`Edit movie with ID ${id}`);
      };
    
      const handleDelete = (id) => {
        console.log(`Delete movie with ID ${id}`);
      };
    
      return (
        <div className="movie-list-container">
          {movies.map((movie) => (
            <div className="movie-card" key={movie.id}>
              <img className="movie-image" src={movie.image} alt={movie.title} />
              <div className="movie-content">
                <h3>{movie.title}</h3>
                <p>{movie.description}</p>
                <div className="movie-buttons">
                  <button onClick={() => handleEdit(movie.id)}>Edit</button>
                  <button onClick={() => handleDelete(movie.id)}>Delete</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      );
}

export default SellerMovieList