import React from "react";
import { Grid, makeStyles } from "@material-ui/core";
import BuyerPage from "./BuyerLogin";
import SellerPage from "./SellerLogin";

import Pic1 from './../../Graphics/batman.jpg';
import Pic2 from './../../Graphics/impossible.jpg';
import Pic3 from './../../Graphics/loki.jpg';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: theme.spacing(4),
  },
}));

const Login = () => {
  const classes = useStyles();

  return (
    <div>
      <div style={{ position: 'fixed', zIndex: -1, top: 0, left: 0, right: 0, bottom: 0 }}>
        <img src={Pic1} alt="backpic1" style={{ position: 'absolute', top: 0, left: 0, height: '100%', width: '33.33%', objectFit: 'cover' }} />
        <img src={Pic2} alt="backpic2" style={{ position: 'absolute', top: 0, left: '33.33%', height: '100%', width: '33.33%', objectFit: 'cover' }} />
        <img src={Pic3} alt="backpic3" style={{ position: 'absolute', top: 0, left: '66.66%', height: '100%', width: '33.33%', objectFit: 'cover' }} />
      </div>
      <div className={classes.root}>
      <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
          <BuyerPage />
        </Grid>
        <Grid item xs={12} md={6}>
          <SellerPage />
        </Grid>
      </Grid>
    </div>
    </div>

  );
}

export default Login