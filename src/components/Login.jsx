import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { TextField, Button, Container } from "@mui/material";
import cookie from "cookie"


const Login = () => {
  const navigate = useNavigate();

  const [state, setState] = useState({
    username: "",
    password: "",
  });

  const handleTextChange = (e) => {
    const { name, value } = e.target;
    setState((prevState) => {
      return {
        ...prevState,
        [name]: value,
      };
    });
  };

  const login = (e) => {
    e.preventDefault();
    const payload = {...user}
    props.userLogin(payload)
    // set cookie here
    // set loggedIn = true and max-age = 60*1000 (one minute)
    document.cookie = cookie.serialize("isLoggedIn", "true", {
    });
    navigate("/");
  };
  //"isLoggedIn=true; max-age=10";

  return (
    <div className="App">
      <Container maxWidth="sm">
        <form className="login-form" onSubmit={login}>
          <TextField
            required
            onChange={handleTextChange}
            value={state.username}
            name="username"
            label="Username"
            type="text"
          />
          <TextField
            required
            onChange={handleTextChange}
            value={state.password}
            name="password"
            label="Password"
            type="password"
          />
          <Button
            type="submit"
            className="login-button"
            variant="contained"
            color="primary"
          >
            Login
          </Button>
        </form>
      </Container>
    </div>
  )
}

export default Login
