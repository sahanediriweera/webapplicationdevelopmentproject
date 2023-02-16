import React from 'react';
import { Paper, Typography, Button } from '@material-ui/core';

const BuyerLogin = ({ classes }) => {
  return (
    <Paper className={classes.paper}>
    <Typography variant="h5" gutterBottom>
      For Buyers
    </Typography>
    <Typography variant="body1" gutterBottom>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
      rhoncus tristique nunc, vel pulvinar nisi. Sed auctor interdum erat, ut
      consectetur velit posuere ut.
    </Typography>
    <Button variant="contained" color="primary" className={classes.button}>
      Login
    </Button>
    <Button variant="outlined" color="primary" className={classes.button}>
      Signup
    </Button>
  </Paper>
  )
}

export default BuyerLogin