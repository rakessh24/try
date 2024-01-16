import { Visibility, VisibilityOff } from '@mui/icons-material';
import { Avatar, Box, Container, Typography } from '@mui/material';
import React, { useState } from 'react';
import AlertMessages from '../../components/AlertMessage/AlertMessage';
import Buttons from '../../components/Button/Button';
import InputTextMessage from '../../components/TextField/InputTextField';

function Signup(params) {
  const [isShowPassword, setisShowPassword] = useState(false);
  const [isSuccess, setisSuccess] = useState(false);
  const [isError, setisError] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();

    const data = new FormData(event.currentTarget);
    console.log("data email", data.get("email"));
    console.log("data password", data.get("password"));

    const email = data.get("email");
    const password = data.get("password");

    if (email === "admin@gmail.com" && password === "admin") {
      setisSuccess(true);
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
          Sign Up
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
        <InputTextMessage
          id="Nama"
          label="Nama"
          variant="outlined"
          fullWidth
          required
          margin="normal"
          autoFocus
          name="nama"
          type="text"
        />
        <InputTextMessage
          id="Email"
          label="Email Addres"
          variant="outlined"
          fullWidth
          required
          margin="normal"
          autoFocus
          name="email"
          type="text"
        />
        <InputTextMessage
          id="No Telp"
          label="No Telp"
          variant="outlined"
          fullWidth
          required
          margin="normal"
          autoFocus
          name="notelp"
          type="number"
        />
        <InputTextMessage
          id="Alamat"
          label="Alamat"
          variant="outlined"
          fullWidth
          required
          margin="normal"
          autoFocus
          name="Alamat"
          type="text"
        />
        <div style={{ display: "absolute", widht: "100%", position: "relative" }}>
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
          <div style={{ position: "absolute", right: 15, top: 33, cursor: "pointer"}} onClick={() => setisShowPassword(!isShowPassword)}>
            {isShowPassword ? (<VisibilityOff fontSize="small" /> ) : ( <Visibility fontSize="small" />)}
          </div>

          <InputTextMessage
            id="Confirm Password"
            label="Confirm Password"
            variant="outlined"
            fullWidth
            required
            margin="normal"
            autoFocus
            name="password"
            type={isShowPassword ? "text" : "password"}
          />
          <div style={{ position: "absolute", right: 15, bottom: 25, cursor: "pointer" }} onClick={() => setisShowPassword(!isShowPassword)}>
          {isShowPassword ? <VisibilityOff fontSize="small" /> : <Visibility fontSize="small" />}
          </div>

        </div>
        <Buttons
          type="submit"
          variant="contained"
          fullWidth
          label="Sign Up"
        />

        <AlertMessages 
        label="Berhasil Sign Up"
        open={isSuccess}
        severity="success"
        onClose={handleClose}
        />

<AlertMessages 
        label="Confim Password is Wrong!"
        open={isError}
        severity="error"
        onClose={handleClose}
        />

      </Box>
    </Container>
  );
}

export default Signup;