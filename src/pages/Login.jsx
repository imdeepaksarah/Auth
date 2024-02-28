import React, { useState } from "react";
import { logIn, ragister } from "../features/auth/authSerives";
import { loginUser } from "../features/auth/authSlice";
import { useDispatch } from "react-redux";

const Login = () => {
  const dispatch=useDispatch()
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handel = (e) => {
    e.preventDefault()
    dispatch(loginUser(formData))
  };

// logIn({email})

  return (
    <form onSubmit={(e)=>handel(e)}>
      <h1 className="display-1 text-center">Login Page</h1>
      <input
        type="email"
        placeholder="Email"
        className="form-control rounded-0 my-2"
        name="email"
        onChange={(e)=>setFormData({
          ...formData,
          [e.target.name]: e.target.value,
        })}
        required
      />
      <input
        type="password"
        placeholder="Password"
        className="form-control rounded-0 my-2"
        name="password"
        onChange={(e)=>setFormData({
          ...formData,
          [e.target.name]: e.target.value,
        })}
        required
      />
      <button className="btn btn-success rounded-0 w-100" type="submit">Login</button>
    </form>
  );
};

export default Login;
