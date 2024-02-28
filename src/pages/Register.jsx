import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { registerUser } from "../features/auth/authSlice";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const user = useSelector(state=>state.auth.user);
  

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    password2: "",
  });

  const { name, email, password, password2 } = formData;

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    

    console.log(formData)
    
    dispatch(registerUser(formData))
    
  };
  registerUser(formData)

  useEffect(()=>{
    if(user) navigate("/")
  })

  return (
    <>
      <h1 className="display-4 text-center">Register Page</h1>
      <form className="my-5" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Name"
          className="form-control rounded-0 my-2"
          name="name"
          value={name}
          onChange={(e)=>handleChange(e)}
          required
        />
        <input
          type="email"
          placeholder="Email"
          className="form-control rounded-0 my-2"
          name="email"
          value={email}
          onChange={(e)=>handleChange(e)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          className="form-control rounded-0 my-2"
          name="password"
          value={password}
          onChange={(e)=>handleChange(e)}
          required
        />
        <input
          type="password"
          placeholder="Confirm Password"
          className="form-control rounded-0 my-2"
          name="password2"
          value={password2}
          onChange={(e)=>handleChange(e)}
          required
        />
        <button className="btn btn-success rounded-0 w-100" type="submit">Register</button>
      </form>
    </>
  );
};

export default Register;
