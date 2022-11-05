import React, { useState } from 'react';
import './Login.css';
import { AiOutlineMail } from 'react-icons/ai';
import { FiEyeOff } from 'react-icons/fi';
import { CgCloseO } from 'react-icons/cg';
// import axios from 'axios';
import { useDispatch } from 'react-redux';
import { getLogin, getLoginGoogle } from '../../App/Counter/loginSlice';

import GoogleButton from 'react-google-button';

const Login = ({ open, onClose }) => {
  const dispatch = useDispatch();
  const dataValue = {
    email: '',
    password: '',
  };
  const [data, setData] = useState(dataValue);

  const handleDataInput = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  const handleGoogle = () => {
    try {
      dispatch(getLoginGoogle());
    } catch (error) {
      console.error(error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      dispatch(getLogin(data));
      // console.log(data)
    } catch (error) {
      console.error(error);
    }
  };

  if (!open) return null;
  return (
    <div className="wrap_form">
      <div className="item_form">
        <h1> Log In to Your Account</h1>
        <CgCloseO onClick={() => onClose(false)} className="icon_close text-2xl cursor-pointer" />
      </div>
      <hr />
      <form onSubmit={handleSubmit}>
        <div className="input_box">
          <input className="h-10 w-full" name="email" value={data.email} type="email" onChange={handleDataInput} placeholder="Email Address" pattern="^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+[.]+[a-zA-Z]{2,}$" required />
          <AiOutlineMail className="icon_form" />
        </div>

        <div className="input_box">
          <input className="h-10 w-full" name="password" value={data.password} type="password" onChange={handleDataInput} placeholder="Password" required />
          <FiEyeOff className="icon_form" />
        </div>

        <div className="googleBtn">
          <button type="submit" className="button w-full h-10 bg-[#b50e0e] text-white">
            Login
          </button>

          <article>or</article>

          <GoogleButton className="" onClick={handleGoogle} />
        </div>
      </form>
    </div>
  );
};

export default Login;
