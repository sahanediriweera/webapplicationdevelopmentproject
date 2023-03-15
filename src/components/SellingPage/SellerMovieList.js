import React from 'react';
import './SellerMovieList.css';
import { useNavigate} from 'react-router-dom';
import MyButton from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import graphics from './../../Graphics/graphics';

const useStyles = makeStyles({
  buttonContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: '100%',
  },
});

const SellerMovieList = ({movies,deleteMovies,email,token}) => {



  const classes = useStyles();
    const nagivation = useNavigate();

    const handleEdit = (id) => {
        console.log(`Edit movie with ID ${id}`);
        const dataToSend = {'email':email, 'id':id,'token':token}
        nagivation('/editsellticket',{state:dataToSend});
      };
    
      const handleDelete = (id) => {
        console.log(`Delete movie with ID ${id}`);
        deleteMovies(id);
        const dataToSend = {'email':email,'token':token}
        nagivation('/seller',{replace:true,state:dataToSend});
      };
    
      return (
        <div className="movie-list-containment">
          {movies.map((movie) => (
            <div className="movies-card" key={movie.id}>
              <img className="movie-image" src={graphics()} alt={movie.title} />
              <div className="movie-content">
                <h3>{movie.title}</h3>
                <p>{movie.description}</p>
                <div className="movie-buttons">
                  <div className={classes.buttonContainer}>
                    <MyButton onClick={() => handleEdit(movie.id)} variant="contained" color="primary">
                      Edit
                    </MyButton>
                    <MyButton onClick={() => handleDelete(movie.id)} variant="contained" color="secondary">
                      Delete
                    </MyButton>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      );
}

export default SellerMovieList