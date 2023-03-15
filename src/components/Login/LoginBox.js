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
import { useNavigate } from "react-router-dom";
import axios from "axios";





const useStyles = makeStyles((theme) => ({
  loginButton: {
    marginRight: theme.spacing(2),
    marginBottom:theme.spacing(4),
    marginTop:theme.spacing(2),
  },
  signupButton: {
    backgroundColor: theme.palette.secondary.main,
    color: theme.palette.common.white,
    marginRight:theme.spacing(2),
  },
}));

const LoginBox = ({user}) => {
  const navigation = useNavigate();
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

  const handleLogin = ()=> {
    if(user === 'buyer'){
      handleLoginBuyer();
    }else if(user === 'seller'){
      handleLoginSeller();
    }
  }

  const handleLoginBuyer = () => {
    // send request to localhost:7035 to login with email and password
    // fetch("https://localhost:7138/api/Login/loginbuyer", {
    //   method: "POST",
    //   body: JSON.stringify({ email, password }),
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    // })
    const formData = {email,password}
    axios.post("https://localhost:7138/api/Login/loginbuyer",formData)
      .then((res) => {
          setLoginSuccess(true);
          const token = res.data.token;
          const dataToSend = {'email':email,'token':token};
          navigation('/dashboard',{state: dataToSend});
      })
      .catch((error) => {console.error(error);setLoginSuccess(false);});

    setOpen(false);
    setEmail("");
    setPassword("");
  };

  const handleOnClickSignUp =()=> {
    navigation('/signup');
  }
  const handleLoginSeller = () => {
    // send request to localhost:7035 to login with email and password
    // fetch("https://localhost:7138/api/Login/loginseller", {
    //   method: "POST",
    //   body: JSON.stringify({ email, password }),
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    // })
    const formData = {email,password}
    axios.post("https://localhost:7138/api/Login/loginseller",formData)
      .then((res) =>{
          setLoginSuccess(true);
          const token = res.data.token;
          const dataToSend = {'email':email,'token':token};
          navigation('/seller',{state: dataToSend});

      } )
      .catch((error) => {console.error(error);setLoginSuccess(false);});

    setOpen(false);
    setEmail("");
    setPassword("");
  };

  const handleSnackbarClose = () => {
    setLoginSuccess(null);
  };

  return (
    <div style={{display:'flex',flexDirection:'column'}}>
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
        onClick={handleOnClickSignUp}
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
    </div>
  );
};

export default LoginBox;