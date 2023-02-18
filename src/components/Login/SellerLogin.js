import React, { useState } from "react";
import { Button, Paper, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import LoginPage from "./LoginBox";

const useStyles = makeStyles((theme) => ({
  paper: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginTop: theme.spacing(4),
  },
  sellerPaper: {
    padding: theme.spacing(4),
    textAlign: "center",
  },
}));

const SellerLogin = () => {
  const classes = useStyles();

  return (
    <div className={classes.paper}>
      <Paper className={classes.sellerPaper}>
        <Typography variant="h5">Sell Your Tickets</Typography>
        <Typography variant="body1">
          Are you a ticket seller? Join our marketplace and start selling your
          tickets today!
        </Typography>
        <LoginPage />
      </Paper>
    </div>
  );
}

export default SellerLogin