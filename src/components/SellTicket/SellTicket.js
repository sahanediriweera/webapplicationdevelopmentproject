import React from 'react'
import Pic1 from './../../Graphics/enola.jpg';
import Pic2 from './../../Graphics/theintern.jpg';
import { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
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
const SellTicket = () => {
  const classes = useStyles();
  const [name, setName] = useState('');
  const [rating, setRating] = useState('');
  const [accountNumber, setAccountNumber] = useState('');
  const [description, setDescription] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');

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
        console.log(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div className={classes.formContainer}>
      <form className={classes.form} onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField label="Name" variant="outlined" fullWidth value={name} onChange={(event) => setName(event.target.value)} />
          </Grid>
          <Grid item xs={12}>
            <TextField label="Rating" variant="outlined" type="number" fullWidth value={rating} onChange={(event) => setRating(event.target.value)} />
          </Grid>
          <Grid item xs={12}>
            <TextField label="Account Number" variant="outlined" type="number" fullWidth value={accountNumber} onChange={(event) => setAccountNumber(event.target.value)} />
          </Grid>
          <Grid item xs={12}>
            <TextField label="Description" variant="outlined" multiline rows={4} fullWidth value={description} onChange={(event) => setDescription(event.target.value)} />
          </Grid>
          <Grid item xs={6}>
            <TextField label="Date" variant="outlined" type="date" fullWidth value={date} onChange={(event) => setDate(event.target.value)} />
          </Grid>
          <Grid item xs={6}>
            <TextField label="Time" variant="outlined" type="time" fullWidth value={time} onChange={(event) => setTime(event.target.value)} />
          </Grid>
          <Grid item xs={12}>
            <Button type="submit" variant="contained" color="primary">
              Submit
            </Button>
          </Grid>
        </Grid>
      </form>
    </div>
  );
}

export default SellTicket