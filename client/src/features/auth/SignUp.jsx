import React, {useState} from 'react';
import {registerUrl} from '../../api/Api';
import axios from 'axios';
import {TextField, Box, Button, Typography} from '@mui/material';
import styles from './styles/SignUp.module.css'
import { LoginStyles } from './styles/Styling';

const SignUp = () => {
  const initialValue = {
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    password: '',
    userName: '',
  };

  const [data, setData] = useState (initialValue);

  const handleChange = async e => {
    e.preventDefault ();
    setData (prevState => ({
        ...prevState,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async e => {
        e.preventDefault ();
        const userData = {
            userName: data.userName,
            firstName: data.firstName,
            lastName: data.lastName,
            email: data.email,
            phoneNumber: data.phoneNumber,
            password: data.password
        }

        const response = await axios.post(registerUrl, userData)

        if(response.status === 200){
            console.log('BC res --> ',response.data)
        }
    }

  return (
    <Box className={styles.SignUp}>
      <Typography sx={LoginStyles.WelcText}>Register</Typography>
      <form className={styles.SignUpForm} onSubmit={handleSubmit}>
        <div className={styles.SignUpDiv1}>
        <TextField
        sx={LoginStyles.InputStyles}
        label="Firstname"
        value={data.firstName}
        name='LastName'
        onChange={handleChange}
        type='text'
        variant='outlined'
          />
        </div>
        <div>
        <TextField
        
        label="Lastname"
        value={data.lastName}
        name='LastName'
        onChange={handleChange}
        type='text'sx={LoginStyles.InputStyles}
        variant='outlined'
          />
        </div>
        <div>
        <TextField
        sx={LoginStyles.InputStyles}
        label="Email"
        value={data.email}
        name='Email'
        onChange={handleChange}
        type='text'
        variant='outlined'
          />
        </div>
        <div>
        <TextField
        sx={LoginStyles.InputStyles}
        label="UserName"
        value={data.userName}
        name='UserName'
        onChange={handleChange}
        type='text'
        variant='outlined'
          />
        </div>
        <div>
        <TextField
        sx={LoginStyles.InputStyles}
        label="PhoneNumber"
        value={data.phoneNumber}
        name='firstName'
        onChange={handleChange}
        type='text'
        variant='outlined'
          />
        </div>
        <div>
        <TextField
        sx={LoginStyles.InputStyles}
        label="Password"
        value={data.password}
        name='Password'
        onChange={handleChange}
        type='text'
        variant='outlined'
          />
        </div>
        <div>
          <Button variant='cotained' sx={LoginStyles.ButtonStyles} type="submit">Submit</Button>
          </div>
      </form>
    </Box>
  );
};

export default SignUp;
