import React from 'react'
import Pic1 from './../../Graphics/sherlock.jpg';
import Pic2 from './../../Graphics/blackhawckdown.jpg';
import { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import axios from 'axios';
import { useLocation } from 'react-router-dom';

const useStyles = makeStyles({
  formContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    width:'60%',
    marginLeft:'20%'
    
  },
  form: {
    backgroundColor: '#FFF9C4',
    padding: 20,
    borderRadius: 10,
    boxShadow: '0px 0px 10px 0px rgba(0,0,0,0.5)',
    '& .MuiTextField-root': {
      margin: '10px 0',
    },
    '& .MuiButton-root': {
      marginTop: 20,
      width: '100%',
    },
  },
});

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const BuyTicket = () => {

  const location = useLocation();
  const recievedData = location.state;
  const id = recievedData.id;
  const token = recievedData.token;
  const classes = useStyles();
  const [name, setName] = useState('');

  const [movieName, setMovieName] = useState(recievedData.name);
  const [email, setEmail] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [statusMessage, setStatusMessage] = useState(null);
  const [accNum,setAccNum] = useState('');
  const [ccv,setccv] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = {
      name,
      movieName,
      email,
      date,
      time,
      accNum,
      ccv,
      id,
    };
    console.log(token);
    console.log(formData)
    axios.post('https://localhost:7138/api/BuyTicket/buyticket', formData, {
      headers: {
        Authorization: `Bearer ${token}`
      }})
      .then((response) => {
        setStatusMessage({ severity: 'success', message: 'Submit successful!' });
        console.log(response.data);
      })
      .catch((error) => {
        setStatusMessage({ severity: 'error', message: 'Submit failed. Please try again later.' });
        console.error(error);
      });
  };

  const handleCloseStatusMessage = () => {
    setStatusMessage(null);
  };


  return (
    <div>
        <div style={{ position: 'fixed', zIndex: -1, top: 0, left: 0, right: 0, bottom: 0 }}>
          <img src={Pic1} alt="backpic1" style={{ position: 'absolute', top: 0, left: 0, height: '100%', width: '50%', objectFit: 'cover' }} />
          <img src={Pic2} alt="backpic2" style={{ position: 'absolute', top: 0, left: '50%', height: '100%', width: '50%', objectFit: 'cover' }} />
        </div>
      <div className={classes.formContainer}>
      <form className={classes.form} onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField variant="outlined" label="Name" value={name} fullWidth onChange={(event) => setName(event.target.value)} />
          </Grid>
          <Grid item xs={12}>
            <TextField variant="outlined" label="Movie Name" fullWidth value={movieName} onChange={(event) => setMovieName(event.target.value)} />
          </Grid>
          <Grid item xs={12}>
            <TextField variant="outlined" label="Email" fullWidth value={email} onChange={(event) => setEmail(event.target.value)} />
          </Grid>
          <Grid item xs={12}>
            <TextField variant="outlined" label="Account Number" type='number' fullWidth value={accNum} onChange={(event) => setAccNum(event.target.value)} />
          </Grid>
          <Grid item xs={12}>
            <TextField variant="outlined" label="CCV" type='number' fullWidth value={ccv} onChange={(event) => setccv(event.target.value)} />
          </Grid>
          <Grid item xs={6}>
            <TextField variant="outlined" label="Date" type="date" fullWidth value={date} onChange={(event) => setDate(event.target.value)} InputLabelProps={{ shrink: true }} />
          </Grid>
          <Grid item xs={6}>
            <TextField variant="outlined" label="Time" type="time" fullWidth value={time} onChange={(event) => setTime(event.target.value)} InputLabelProps={{ shrink: true }} />
          </Grid>
          <Grid item xs={12}>
            <Button variant="contained" color="primary" type="submit">
              Submit
            </Button>
          </Grid>
        </Grid>
      </form>
      <Snackbar open={statusMessage != null} autoHideDuration={5000} onClose={handleCloseStatusMessage}>
        <Alert onClose={handleCloseStatusMessage} severity={statusMessage ? statusMessage.severity : 'info'}>
          {statusMessage ? statusMessage.message : ''}
        </Alert>
      </Snackbar>
    </div>

    </div>

  );
}

export default BuyTicket