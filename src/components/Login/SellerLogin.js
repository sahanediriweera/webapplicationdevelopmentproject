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

const SellerLogin = () => {
  const classes = useStyles();

  return (
    <div className={classes.paper}>
      <Paper className={classes.sellerPaper}>
        <Typography variant="h5">Ticket Sellers</Typography>
        <Typography variant="body1">
        Signing up as a seller on a ticket-selling website can greatly enhance an individual or organization's ticket sales efforts, providing a convenient and effective platform to reach a wider audience and grow their business
        </Typography>
        <LoginPage />
      </Paper>
    </div>
  );
}

export default SellerLogin