import React from 'react';
import './SellerMovieList.css';

const SellerMovieList = ({movies}) => {

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