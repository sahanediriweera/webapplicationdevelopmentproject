import React, { useState } from "react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  TextField,
  Snackbar,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  loginButton: {
    marginRight: theme.spacing(2),
  },
  signupButton: {
    backgroundColor: theme.palette.secondary.main,
    color: theme.palette.common.white,
  },
}));

const LoginBox = () => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginSuccess, setLoginSuccess] = useState(null);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleLogin = () => {
    // send request to localhost:7035 to login with email and password
    fetch("https://localhost:7035/api/Home/login", {
      method: "POST",
      body: JSON.stringify({ email, password }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        if (res.ok) {
          setLoginSuccess(true);
        } else {
          setLoginSuccess(false);
        }
        return res.json();
      })
      .then((data) => console.log(data))
      .catch((error) => console.error(error));

    setOpen(false);
    setEmail("");
    setPassword("");
  };

  const handleSnackbarClose = () => {
    setLoginSuccess(null);
  };

  return (
    <>
      <Button
        variant="contained"
        color="primary"
        className={classes.loginButton}
        onClick={handleClickOpen}
      >
        Login
      </Button>
      <Button
        variant="contained"
        color="secondary"
        className={classes.signupButton}
      >
        Sign Up
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Login</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Please enter your email and password to login.
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="email"
            label="Email Address"
            type="email"
            fullWidth
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            margin="dense"
            id="password"
            label="Password"
            type="password"
            fullWidth
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleLogin} color="primary">
            Login
          </Button>
        </DialogActions>
      </Dialog>
      <Snackbar
        open={loginSuccess !== null}
        autoHideDuration={5000}
        onClose={handleSnackbarClose}
        message={
          loginSuccess
            ? "Login successful!"
            : "Login failed. Please check your email and password."
        }
      />
    </>
  );
};

export default LoginBox;
