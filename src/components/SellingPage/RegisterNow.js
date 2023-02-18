import React from 'react';
import { Button, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginLeft:'200px',
    marginTop:'50px',
    background:'#ffffff',
    padding:'20px'
  },
  button: {
    backgroundColor: 'purple',
    color: 'white',
    borderRadius: 5,
    padding: '10px 20px',
    fontSize: 18,
    marginTop: 20,
    '&:hover': {
      backgroundColor: 'darkorchid',
    },
  },
});



const RegisterNow = () => {
    const classes = useStyles();

    return (
      <div className={classes.container}>
        <Button className={classes.button}>Kay</Button>
        <Typography variant="body1" align="center">Some simple text here</Typography>
        <Button className={classes.button}>Register now</Button>
      </div>
    );
}

export default RegisterNow