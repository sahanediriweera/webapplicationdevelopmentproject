import React from 'react';
import './SellerMovieList.css';
import { useNavigate} from 'react-router-dom';

const SellerMovieList = ({movies,deleteMovies}) => {
    const nagivation = useNavigate();

    const handleEdit = (id) => {
        console.log(`Edit movie with ID ${id}`);
        nagivation('/editsellticket');
      };
    
      const handleDelete = (id) => {
        console.log(`Delete movie with ID ${id}`);
        deleteMovies(id);
        nagivation('/seller',{replace:true})
      };
    
      return (
        <div className="movie-list-containment">
          {movies.map((movie) => (
            <div className="movies-card" key={movie.id}>
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