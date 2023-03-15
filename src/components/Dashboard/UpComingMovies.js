import axios from 'axios';
import React, { useEffect, useState } from 'react';
import './UpComingMovies.css';
import MyButton from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import { useNavigate } from 'react-router-dom';

const useStyles = makeStyles({
  buttonContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: '100%',
  },
});

function getShortenedText(text) {
  let shortenedText = text;

  if (text.length > 50) {
    shortenedText = text.substring(0, 50) + '...';
  }

  return shortenedText;
}



const UpcomingMovies = ({movies, email,token}) => {
  const navigate = useNavigate();
  const classes = useStyles();

  const handleBuyTicket = (id,name)=> {
    const dataToSend = {'email':email,'id':id,'name':name,'token':token};
    navigate('/buyticket',{state:dataToSend});
  }
  const handleEditBuyTicket = ()=> {
    const dataToSend = {'email':email,'token':token};
    navigate('/editbuyticket',{state:dataToSend});
  }

  return (
    <div className="upcoming-movies">
      <div className={classes.buttonContainer}>
        <MyButton onClick={handleEditBuyTicket} variant="contained" color="secondary">
          Edit BuyTicket
        </MyButton>
      </div>
      
      <h2>Upcoming Movies</h2>
      <ul>
        {movies.map(movie => (
          <li key={movie.id}>
            <h3>{movie.title}</h3>
            <p>{getShortenedText(movie.description)}</p>
            <div>
              <MyButton onClick={()=>handleBuyTicket(movie.id,movie.title)} variant="contained" color="primary">
                Buy Ticket
              </MyButton>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UpcomingMovies;