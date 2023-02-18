import React from 'react'
import Pic1 from './../../Graphics/enola.jpg';
import Pic2 from './../../Graphics/theintern.jpg';
import { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import axios from 'axios';

const useStyles = makeStyles({
  formContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
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
const SellTicket = () => {
  const classes = useStyles();
  const [name, setName] = useState('');
  const [rating, setRating] = useState('');
  const [accountNumber, setAccountNumber] = useState('');
  const [description, setDescription] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [statusMessage, setStatusMessage] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = {
      name,
      rating: parseInt(rating),
      accountNumber: parseInt(accountNumber),
      description,
      date,
      time,
    };
    axios.post('https://localhost:7035/api/Home', formData)
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
    <div className={classes.formContainer}>
      <form className={classes.form} onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField variant="outlined" label="Name" value={name} onChange={(event) => setName(event.target.value)} />
          </Grid>
          <Grid item xs={12}>
            <TextField variant="outlined" label="Rating" type="number" value={rating} onChange={(event) => setRating(event.target.value)} />
          </Grid>
          <Grid item xs={12}>
            <TextField variant="outlined" label="Account Number" type="number" value={accountNumber} onChange={(event) => setAccountNumber(event.target.value)} />
          </Grid>
          <Grid item xs={12}>
            <TextField variant="outlined" label="Description" value={description} onChange={(event) => setDescription(event.target.value)} />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField variant="outlined" label="Date" type="date" value={date} onChange={(event) => setDate(event.target.value)} InputLabelProps={{ shrink: true }} />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField variant="outlined" label="Time" type="time" value={time} onChange={(event) => setTime(event.target.value)} InputLabelProps={{ shrink: true }} />
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
  );
}

export default SellTicket