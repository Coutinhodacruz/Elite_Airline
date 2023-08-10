import React, {useState} from 'react';
import {registerAdminUrl} from '../../api/Api';
import axios from 'axios';
import {TextField, Box, Button, Typography} from '@mui/material';
import { AdminSignUpStyles } from './styles/adminStyles/AdminStylin';
import adminStyles from './styles/adminStyles/AdminSignUp.module.css'; 

const AdminSignUp = () => {
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

        const response = await axios.post(registerAdminUrl, userData)

        if(response.status === 200){
            console.log('BC res --> ',response.data)
        }
    }

  return (
    <Box className={adminStyles.SignUp}>
      <Typography sx={AdminSignUpStyles.WelcText}>Admin Registeration</Typography>
      <form className={adminStyles.SignUpForm} onSubmit={handleSubmit}>
        <div className={adminStyles.SignUpDiv1}>
        <TextField
        sx={AdminSignUpStyles.InputStyles}
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
        type='text'sx={AdminSignUpStyles.InputStyles}
        variant='outlined'
          />
        </div>
        <div>
        <TextField
        sx={AdminSignUpStyles.InputStyles}
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
        sx={AdminSignUpStyles.InputStyles}
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
        sx={AdminSignUpStyles.InputStyles}
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
        sx={AdminSignUpStyles.InputStyles}
        label="Password"
        value={data.password}
        name='Password'
        onChange={handleChange}
        type='text'
        variant='outlined'
          />
        </div>
        <div>
          <Button variant='cotained' sx={AdminSignUpStyles.ButtonStyles} type="submit">Submit</Button>
          </div>
      </form>
    </Box>
  );
};

export default AdminSignUp;
