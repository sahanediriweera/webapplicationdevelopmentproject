import React from 'react';
import Pic1 from './../Graphics/knight.jpg';
import Pic2 from './../Graphics/impossible.jpg';
import Pic3 from './../Graphics/loki.jpg';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

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
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <Paper className={classes.paper}>
              <Typography variant="h4" gutterBottom>
                For Buyers
              </Typography>
              <Typography variant="body1" gutterBottom>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Vestibulum rhoncus tristique nunc, vel pulvinar nisi. Sed auctor
                interdum erat, ut consectetur velit posuere ut.
              </Typography>
              <Button
                variant="contained"
                color="primary"
                className={classes.button}
              >
                Login
              </Button>
              <Button
                variant="outlined"
                color="primary"
                className={classes.button}
              >
                Signup
              </Button>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Paper className={classes.paper}>
              <Typography variant="h4" gutterBottom>
                For Sellers
              </Typography>
              <Typography variant="body1" gutterBottom>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Vestibulum rhoncus tristique nunc, vel pulvinar nisi. Sed auctor
                interdum erat, ut consectetur velit posuere ut.
              </Typography>
              <Button
                variant="contained"
                color="primary"
                className={classes.button}
              >
                Login
              </Button>
              <Button
                variant="outlined"
                color="primary"
                className={classes.button}
              >
                Signup
              </Button>
            </Paper>
          </Grid>
        </Grid>
      </div>
      </div>
    </div>
  )
}

export default Login