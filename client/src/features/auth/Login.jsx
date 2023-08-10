import React, {useState} from 'react';
import {loginUrl} from '../../api/Api';
import axios from 'axios';
import {Link, useNavigate} from 'react-router-dom';
import {TextField, Button, Typography, Box} from '@mui/material';
import { LoginStyles } from './styles/Styling';

const Login = () => {
  const navigate = useNavigate();
  const initialValue = {
    email: 'Coutinho@gmail.com',
    password: '',
  };

  const [data, setData] = useState (initialValue);

  const handleChange = async e => {
    e.preventDefault ();
    setData (prevState => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async e => {
    e.preventDefault ();
    const userData = {
      email: data.email,
      password: data.password,
    };

    const response = await axios.post(loginUrl, userData);
    console.log ('BC res 1--> ', response);
    if (response.status === 200) {
      console.log ('BC res --> ', response.data);
    }
  };

  const handleNavigate = () => {
    navigate('/forgot-password', {state:{email: data.email}})
  }

  

  return (
    <Box sx={LoginStyles.LoginMainStyle}>
      <Typography sx={LoginStyles.WelcText}>
        Welcome back <Box component='span'
        sx={LoginStyles.SpanishStyles}>Coutinho</Box></Typography>
      <Box component={'form'} onSubmit={handleSubmit} sx={LoginStyles.FormStyle}>
        <Box sx={LoginStyles.InputStyles}>

          <TextField
          sx={LoginStyles.TextFieldStyles}
          value={data.email}
          name='email'
          onChange={handleChange}
          type='email'
          id='email'
          label='Email'
          variant='outlined'/>
          
        </Box>
        <Box sx={LoginStyles.InputStyles}>
        <TextField 
          sx={LoginStyles.TextFieldStyles}
          value={data.password}
          name='password'
          onChange={handleChange}
          type='password'
          id='password'
          label='Password'
          variant='outlined'/>

        </Box>
        <Box style={{ width: '50%'}}>
          <Button sx={LoginStyles.ButtonStyles}
          variant="text" type='submit'> Submit</Button>
          </Box>
      </Box>
      <Typography sx={LoginStyles.Typo} 
      onClick={handleNavigate}>Forgot Password</Typography>
    </Box>
  );


};

export default Login;
