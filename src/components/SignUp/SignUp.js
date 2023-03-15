import React from 'react';
import './SignUp.css';
import { useState } from 'react';
import Pic1 from './../../Graphics/babylon.jpg';
import Pic2 from './../../Graphics/glassonion.jpg';
import Pic3 from './../../Graphics/avatar.jpg';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const SignUp = () => {

  const navigation = useNavigate();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [statusMessage, setStatusMessage] = useState(null);

  const handleBuyerSubmit = (event) => {
    event.preventDefault();
    const formData = {
      name,
      email,
      password,
      confirmPassword
    }

    axios.post('https://localhost:7138/api/SignUp/buyer',formData)
    .then(
      response=>{
          setStatusMessage({ severity: 'success', message: 'Signup successful!' });
          setTimeout(()=>{navigation('/');},2000); 
      }
    ).catch(err=>{
      console.log(err);
      setStatusMessage({ severity: 'error', message: 'Submit failed. Please try again later.' });
    })
  };

  const handleSellerSubmit = (event) => {
    event.preventDefault();
    const formData = {
      name,
      email,
      password,
      confirmPassword
    }

    axios.post('https://localhost:7138/api/SignUp/seller',formData)
    .then(
      response=>{
          setStatusMessage({ severity: 'success', message: 'Signup successful!' });
          setTimeout(()=>{navigation('/');},2000);
          
          
      }
    ).catch(err=>{
      console.log(err);
      setStatusMessage({ severity: 'error', message: 'Submit failed. Please try again later.' });
    })
  };

  const handleCloseStatusMessage = () => {
    setStatusMessage(null);
  };
  return (
    <div>
      <div style={{ position: 'fixed', zIndex: -1, top: 0, left: 0, right: 0, bottom: 0 }}>
        <img src={Pic1} alt="backpic1" style={{ position: 'absolute', top: 0, left: 0, height: '100%', width: '33.33%', objectFit: 'cover' }} />
        <img src={Pic2} alt="backpic2" style={{ position: 'absolute', top: 0, left: '33.33%', height: '100%', width: '33.33%', objectFit: 'cover' }} />
        <img src={Pic3} alt="backpic3" style={{ position: 'absolute', top: 0, left: '66.66%', height: '100%', width: '33.33%', objectFit: 'cover' }} />
      </div>
      <form className="form">
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" value={name} onChange={(event) => setName(event.target.value)} />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" value={email} onChange={(event) => setEmail(event.target.value)} />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" value={password} onChange={(event) => setPassword(event.target.value)} />
        </div>
        <div className="form-group">
          <label htmlFor="confirmPassword">Confirm Password:</label>
          <input type="password" id="confirmPassword" value={confirmPassword} onChange={(event) => setConfirmPassword(event.target.value)} />
        </div>
        <div className="form-buttons">
          <button type="submit" onClick={handleBuyerSubmit}>Signup as Buyer</button>
          <button type="submit" onClick={handleSellerSubmit}>Signup as Seller</button>
        </div>
      </form>
      <Snackbar open={statusMessage != null} autoHideDuration={5000} onClose={handleCloseStatusMessage}>
        <Alert onClose={handleCloseStatusMessage} severity={statusMessage ? statusMessage.severity : 'info'}>
          {statusMessage ? statusMessage.message : ''}
        </Alert>
      </Snackbar>
    </div>
  )
}

export default SignUp