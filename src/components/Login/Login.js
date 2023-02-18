import React from "react";
import { Grid, makeStyles } from "@material-ui/core";
import BuyerPage from "./BuyerLogin";
import SellerPage from "./SellerLogin";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: theme.spacing(4),
  },
}));

const Login = () => {
  const classes = useStyles();

  return (
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
  );
}

export default Login