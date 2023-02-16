import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import logo from './../Graphics/ticket.png';

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
    height: '70px', // set the height of the logo to 30px
    margin: '5px', // add margin to adjust the logo position
  },
  navbarTitle: {
    fontSize: '24px',
    margin: 0,
    color:'#000000'
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
    <div>
      <AppBar position="static">
        <Toolbar className={classes.navbar}>
          <img src={logo} className={classes.navbarLogo} alt="logo" />
          <Typography variant="h6" className={classes.navbarTitle}>
            Tickets Warehouse
          </Typography>
          <div className={classes.navbarButtons}>
            <Button variant="contained" className={classes.button}>
              Sign Up
            </Button>
            <Button variant="contained" className={classes.button}>
              Login
            </Button>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Navigation