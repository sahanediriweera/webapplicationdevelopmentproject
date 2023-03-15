import React from 'react';
import { Button, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { useNavigate } from 'react-router-dom';

const useStyles = makeStyles({
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginLeft:'50%',
    marginTop:'50px',
    background:'#d9d9d9',
    padding:'20px',
    borderRadius:'15px',
    width:'40%'
  },
  button: {
    backgroundColor: 'purple',
    color: 'white',
    borderRadius: 5,
    padding: '10px 20px',
    fontSize: 18,
    marginTop: 20,
    marginBottom:20,
    '&:hover': {
      backgroundColor: 'darkorchid',
    },
  },
});



const RegisterNow = ({email}) => {
    const classes = useStyles();
    const navigate = useNavigate();

    const handleOnClick = () => {
        const dataToSend = {'email':email}
        navigate('/sellticket',{state:dataToSend});
    }

    return (
      <div className={classes.container}>
        <Button className={classes.button} onClick = {handleOnClick}>Register Your Movie Now!</Button>
        <Typography variant="body1" align="center" marginTop="10px">We are looking for movie sellers to register their films in our ticket store and make them available for purchase by customers. As a seller, you can reach a large and diverse audience, making it easier for you to promote and sell tickets to your movies.</Typography>
        <Button className={classes.button} onClick = {handleOnClick}>Register Here</Button>
      </div>
    );
}

export default RegisterNow