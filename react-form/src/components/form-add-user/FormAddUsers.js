import React, { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { FormControl, FormLabel, Paper, Grid } from '@mui/material';
import './styles.css';

const FormAddUsers = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // handle form submission
    console.log('email:', email);
    console.log('password:', password);
    console.log('confirmPassword:', confirmPassword);
  };

  function onTextChange(){

  }

  return (
        <Paper>
        <Box
        component="form"
        sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
        }}
        noValidate
        autoComplete="off"
        >   
            <h2 style={{"display": "flex"}} className="form-title">Add a new user</h2>
            <form onSubmit={handleSubmit}>
                <Grid container>
                    <Grid item xs={12} spacing={2}>
                        <FormControl>
                            <TextField 
                                required
                                id="standard-required"
                                label="First Name"
                                defaultValue=""
                                name="first-name"
                                placeholder="First Name"
                                variant="standard"
                                onChange={onTextChange}
                            />
                            <TextField
                                required
                                id="standard-required"
                                name="last-name"
                                label="Last Name"
                                defaultValue=""
                                placeholder="Last Name"
                                variant="standard"
                                onChange={onTextChange}
                            />
                            <TextField
                                required
                                id="standard-required"
                                label="Email"
                                defaultValue=""
                                name="email"
                                placeholder="Email"
                                variant="standard"
                                onChange={onTextChange}
                            />
                            <Button onClick={handleSubmit} type="submit" variant="contained">Submit</Button>
                        </FormControl>
                    </Grid>
                </Grid>
            </form>
        </Box>
        </Paper>
    );
};

export default FormAddUsers;