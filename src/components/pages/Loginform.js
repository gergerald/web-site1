import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Typography, Grid, TextField, Button, FormControlLabel, Checkbox } from '@mui/material';
import '../styles/LoginForm.css';

function LoginForm() {
  const navigate = useNavigate();
  const [rememberMe, setRememberMe] = useState(false);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Perform login authentication logic here

    // Navigate to the dashboard page
    navigate('/sidebar');
  };

  return (
    <div className="login-container">
      <div className="login-form">
        <Typography variant="h2" className="login-heading">
          Login
        </Typography>
        <form onSubmit={handleFormSubmit} className="form">
          <Grid container spacing={2} className="form-grid">
            <Grid item xs={12}>
              <TextField
                id="username"
                label="Username"
                type="text"
                variant="outlined"
                fullWidth
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                id="password"
                label="Password"
                type="password"
                variant="outlined"
                fullWidth
              />
            </Grid>
            <Grid item xs={12}>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={rememberMe}
                    onChange={(e) => setRememberMe(e.target.checked)}
                  />
                }
                label="Remember Me"
              />
            </Grid>
            <Grid item xs={12}>
              <Button type="submit" variant="contained" fullWidth className="form-button">
                Login
              </Button>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="body2">
                <a href="/forgot-password">Forgot your password?</a>
              </Typography>
            </Grid>
          </Grid>
        </form>
      </div>
    </div>
  );
}

export default LoginForm;
