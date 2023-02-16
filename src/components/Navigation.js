import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  navbar: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#FFEC40',
    height: '60px',
    padding: '0 20px',
  },
  navbarLogo: {
    height: '40px',
  },
  navbarTitle: {
    fontSize: '24px',
    margin: 0,
  },
  navbarButtons: {
    display: 'flex',
  },
  button: {
    backgroundColor: '#4CAF50',
    color: 'white',
    padding: '10px 20px',
    textAlign: 'center',
    textDecoration: 'none',
    borderRadius: '5px',
    marginLeft: '10px',
    '&:hover': {
      backgroundColor: '#3e8e41',
    },
  },
}));
const Navigation = () => {
  const classes = useStyles();

  return (
    <nav className={classes.navbar}>
      <div className={classes.navbarLogo}>
        <img src="./ticket.png" alt="Logo" />
      </div>
      <h1 className={classes.navbarTitle}>Website Title</h1>
      <div className={classes.navbarButtons}>
        <Button className={classes.button}>Sign Up</Button>
        <Button className={classes.button}>Login</Button>
      </div>
    </nav>
  );
}

export default Navigation