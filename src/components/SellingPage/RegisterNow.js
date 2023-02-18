import React, { useState } from 'react';
import { Button, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  buttonContainer: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: 20,
  },
  button: {
    backgroundColor: 'purple',
    color: 'white',
    borderRadius: 5,
    padding: '10px 20px',
    fontSize: 18,
    marginRight: 10,
    '&:hover': {
      backgroundColor: 'darkorchid',
    },
  },
});


const RegisterNow = () => {
    const [count, setCount] = useState(0);
    const classes = useStyles();
  
    const handleIncrement = () => {
      setCount(count + 1);
    };
  
    const handleReset = () => {
      setCount(0);
    };
  
    return (
      <div>
        <Typography variant="h6">Count: {count}</Typography>
        <div className={classes.buttonContainer}>
          <Button className={classes.button} onClick={handleIncrement}>Increment</Button>
          <Button className={classes.button} onClick={handleReset}>Reset</Button>
        </div>
      </div>
    );
}

export default RegisterNow