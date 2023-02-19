import React from "react";
import { Paper, Typography } from "@material-ui/core";
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
    width:'400px',
    borderRadius:'15px'
  },
}));

const BuyerLogin = () => {
  const classes = useStyles();

  return (
    <div className={classes.paper}>
      <Paper className={classes.sellerPaper}>
        <Typography variant="h5">Ticket Buyers</Typography>
        <Typography variant="body1">
        Signing up as a buyer on your ticket-selling website is a must for anyone looking to attend events and enjoy the best possible ticket purchasing experience. By creating an account, buyers can easily purchase tickets
        </Typography>
        <LoginPage />
      </Paper>
    </div>
  );
}

export default BuyerLogin