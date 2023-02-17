import React from 'react';
import Pic1 from './../../Graphics/knight.jpg';
import Pic2 from './../../Graphics/impossible.jpg';
import Pic3 from './../../Graphics/loki.jpg';
import { Grid, Container } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import BuyerLogin from './BuyerLogin';
import SellerLogin from './SellerLogin';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginTop: theme.spacing(8),
    marginLeft: theme.spacing(8),
    marginRight: theme.spacing(8),
  },
  paper: {
    padding: theme.spacing(3),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  button: {
    margin: theme.spacing(1),
  },
}));

const Login = () => {
  const classes = useStyles();
  return (
    <div>
      <div style={{ position: 'fixed', zIndex: -1, top: 0, left: 0, right: 0, bottom: 0  }}>
        <img src={Pic1} alt="Pic1" style={{ width: '33.33%' }} />
        <img src={Pic2} alt="Pic2" style={{ width: '33.33%' }} />
        <img src={Pic3} alt="Pic3" style={{ width: '33.33%' }} />
      </div>
      <div>
        <div className={classes.root}>
        <Container maxWidth="md">
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>
              <BuyerLogin classes={classes} />
            </Grid>
            <Grid item xs={12} sm={6}>
              <SellerLogin classes={classes} />
            </Grid>
          </Grid>
        </Container>
      </div>
      </div>
    </div>
  )
}

export default Login