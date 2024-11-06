import React from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import "./login.css"
import c from "../img/4c.jpeg"

const Login = () => {
  return (
    
    <div>
        <div className="background">
          <div className="form">
            <img src={c} alt="" />
            <TextField
            sx={{width: "100%", mb:3.5}}
              id="standard-textarea"
              placeholder="User Name"
              variant="standard"
              type="password"
            />
            <TextField
            sx={{width: "100%", mb:3.5}}
              id="standard-textarea"
              placeholder="Password"
              variant="standard"
              type="password"
            />
            <div className="btns">
              <Button variant="outlined">Cancel</Button>
              <Button variant="contained" color="primary">Login</Button>
            </div>
          </div>
        </div>
    </div>
  );
};

export default Login;