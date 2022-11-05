import React, { useState, useEffect } from 'react';
import './Login.css';
import { AiOutlineMail } from 'react-icons/ai';
import { FiEyeOff } from 'react-icons/fi';
import { CgCloseO } from 'react-icons/cg';
// import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { getLogin, getLoginGoogle } from '../../App/Counter/loginSlice';
import { auth} from '../../firebase';

import { useAuthState } from "react-firebase-hooks/auth";
import GoogleButton from 'react-google-button'

const Login = ({ open, onClose }) => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, loading, error] = useAuthState(auth);
  const navigate = useNavigate();
  const [msg, setMsg] = useState('');

  const dataValue = {
    email: '',
    password: '',
  }
  const [data, setData] = useState(dataValue);

  const handleDataInput = (e) => {
    const {name, value} = e.target;
    setData({ ...data, [name]: value});
  };

  const handleGoogle = () => {
    try {
      dispatch(getLoginGoogle())
    }catch(error) {
      console.error(error)
    }
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    try {
        dispatch(getLogin(data))
        // console.log(data)
    } catch(error) {
        console.error(error);
    }
};
  

  if (msg) {
    setTimeout(() => {
      setMsg('');
    }, 10000);
  }

  if (!open) return null;
  return (
    <div className="wrap_form">
      <span className={`error ${msg && 'muncul'}`}>{msg} !!</span>
      <div className="item_form">
        <h1> Log In to Your Account</h1>
        <CgCloseO onClick={() => onClose(false)} className="icon_close text-2xl cursor-pointer" />
      </div>
      <hr />
      <form onSubmit={handleSubmit}>
        <div className="input_box">
          <input className='h-10 w-full' 
            name='email'
            value={data.email}
            type="email"
            onChange={handleDataInput}
            placeholder="Email Address" 
            pattern="^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+[.]+[a-zA-Z]{2,}$" required />
          <AiOutlineMail className="icon_form" />
        </div>

        <div className="input_box">
          <input className='h-10 w-full' 
              name='password'
              value={data.password}
              type="password"
              onChange={handleDataInput} 
              placeholder="Password"  
              required />
          <FiEyeOff className="icon_form" />
        </div>

        <div className="googleBtn">
          <button  type="submit" className="button w-full h-10 bg-[#b50e0e] text-white">
            Login
          </button>
  
          <article>or</article>

          <GoogleButton 
            className=''
            onClick={handleGoogle}
          />

        </div>
      </form>
    </div>
  );
};

export default Login;