import React from 'react';
import Pic1 from './../../Graphics/enola.jpg';
import Pic2 from './../../Graphics/theintern.jpg';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles({
  formContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    width:'80%',
    marginLeft:'10%',
  },
  form: {
    backgroundColor: '#F5D769',
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

const EditSellTicket = () => {
  const classes = useStyles();
  return (
    <div className="App" style={{display: 'flex'}}>
      <div style={{ position: 'fixed', zIndex: -1, top: 0, left: 0, right: 0, bottom: 0 }}>
        <img src={Pic1} alt="backpic1" style={{ position: 'absolute', top: 0, left: 0, height: '100%', width: '50%', objectFit: 'cover' }} />
        <img src={Pic2} alt="backpic2" style={{ position: 'absolute', top: 0, left: '50%', height: '100%', width: '50%', objectFit: 'cover' }} />
      </div>
      <div className={classes.formContainer}>
        <div className={classes.form}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField label="Name" variant="outlined" fullWidth />
            </Grid>
            <Grid item xs={12}>
              <TextField label="Rating" variant="outlined" type="number" fullWidth />
            </Grid>
            <Grid item xs={12}>
              <TextField label="Account Number" variant="outlined" type="number" fullWidth />
            </Grid>
            <Grid item xs={12}>
              <TextField label="Cost" variant="outlined" type="number" fullWidth />
            </Grid>
            <Grid item xs={12}>
              <TextField label="Description" variant="outlined" multiline rows={4} fullWidth />
            </Grid>
            <Grid item xs={6}>
              <TextField label="Date" variant="outlined" type="date" fullWidth />
            </Grid>
            <Grid item xs={6}>
              <TextField label="Time" variant="outlined" type="time" fullWidth />
            </Grid>
            <Grid item xs={12}>
              <Button variant="contained" color="primary">
                Submit
              </Button>
            </Grid>
          </Grid>
        </div>
      </div>
    </div>
  );
}

export default EditSellTicket