import { Visibility, VisibilityOff } from '@mui/icons-material';
import { Avatar, Box, Container, Typography } from '@mui/material';
import React, { useState } from 'react';
// import { Navigate } from 'react-router-dom';
import AlertMessages from '../../components/AlertMessage/AlertMessage';
import Buttons from '../../components/Button/Button';
import InputTextMessage from '../../components/TextField/InputTextField';

function Login(params) {
  const [isShowPassword, setisShowPassword] = useState(false);
  const [isSuccess, setisSuccess] = useState(false);
  const [isError, setisError] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();

    const data = new FormData(event.currentTarget);
    console.log("data username", data.get("username"));
    console.log("data password", data.get("password"));

    const username = data.get("username");
    const password = data.get("password");

    if (username === "mingaol" && password === "admin") {
      setisSuccess(true);

      // const urlStateParam = {
      //   username: "mingaol",
      //   token: "Masuk123",
      // };

      // return Navigate("/home", {
      //   state: urlStateParam,
      // });
    } else {
      setisError(true);
    }
  };

  const handleClose = () => {
    setisSuccess(false);
    setisError(false);
  }
  return (
    <Container maxWidth="xs">
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          alignItems: "center",
          flexDirection: 'column',
        }}
        component="form"
        onSubmit={handleSubmit}
      >
        <Avatar sx={{ bgcolor: "primary.main" }}>
        </Avatar>
        <Typography component={"h1"} variant="h5">
          Login
        </Typography>
        <InputTextMessage
          id="Username"
          label="Username"
          variant="outlined"
          fullWidth
          required
          margin="normal"
          autoFocus
          name="username"
          type="text"
        />
        <div style={{ display: "flex", width: "100%", position: "relative" }}>
          <InputTextMessage
            id="Password"
            label="Password"
            variant="outlined"
            fullWidth
            required
            margin="normal"
            autoFocus
            name="password"
            type={isShowPassword ? "text" : "password"}
          />
          <div style={{
            position: "absolute",
            right: 15,
            top: 33,
            cursor: "pointer"}} 
            onClick={() => setisShowPassword(!isShowPassword)}
          >
            {isShowPassword ? (
              <VisibilityOff fontSize="small" />
            ) : (
              <Visibility fontSize="small" />
            )}
          </div>
        </div>
        <Buttons
          type="submit"
          variant="contained"
          fullWidth
          label="Login"
        />

        <AlertMessages
          label="your username and password is correct!"
          open={isSuccess}
          severity="success"
          onClose={handleClose}
        />

        <AlertMessages
          label="username and password is wrong!"
          open={isError}
          severity="error"
          onClose={handleClose}
        />

      </Box>
    </Container>
  );
}

export default Login;