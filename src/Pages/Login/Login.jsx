import React, { useState } from 'react';
import './Login.css';
import { AiOutlineMail } from 'react-icons/ai';
import { FiEyeOff } from 'react-icons/fi';
import { CgCloseO } from 'react-icons/cg';
// import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { GoogleOAuthProvider } from '@react-oauth/google';
import { GoogleLogin } from '@react-oauth/google';
// import jwt_decode from 'jwt-decode';
// import { getLoginGoogle } from '../../App/Counter/loginGoogleSlice';
import { useDispatch, useSelector } from 'react-redux';
import { getLogin, getLoginGoogle } from '../../App/Counter/loginSlice';

const Login = ({ open, onClose }) => {
  const navigate = useNavigate();

  // const  loginGoogle  = useSelector((state) => state.loginGoogle)
  // const  loginGoogle  = useSelector((state) => state.loginGoogle)
  const dispatch = useDispatch();

  // const API_ENDPOINT = `https://notflixtv.herokuapp.com/api/v1/users/login`;
  const [msg, setMsg] = useState('');
  const [data, setData] = useState({
    email: '',
    password: '',
  });

  const handleDataInput = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const handleLoginGoogle = (credentialResponse) => {
    dispatch(getLoginGoogle(credentialResponse))
    onClose(false);
    navigate('/');
  }

  // useEffect(() => {
  //   dispatch(getDetail(id))
  // }, [dispatch, id]);

  const handleSubmit = (e) => {
    e.preventDefault();
    
    dispatch(
      getLogin({
      // name:name,
      email:data.email,
      password:data.password,
      loggedIn:true,
    })
    );
  };
  // const dataSend = (e) => {
  //   e.preventDefault();
    
  //   dispatch(
  //     login({
  //     // name:name,
  //     email:'email',
  //     password:'password',
  //     loggedIn:true,
  //   })
  //   );
  // };
  // const dataSend = (e) => {
  //   e.preventDefault();
  //   axios
  //     .post(API_ENDPOINT, data)
  //     .then((res) => {
  //       localStorage.setItem('credential', res.data.data.token);
  //       localStorage.setItem('given_name', res.data.data.first_name);
  //       onClose(false);
  //       navigate('/');
  //     })
  //     .catch((err) => setMsg('Email atau Password anda salah!'));
  // };

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
        <CgCloseO onClick={() => onClose(false)} className="icon_close" />
      </div>
      <hr />
      <form onSubmit={(e) => handleSubmit(e)}>
        <div className="input_box">
          <input type="email" name="email" onChange={handleDataInput} placeholder="Email Address" pattern="^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+[.]+[a-zA-Z]{2,}$" required />
          <AiOutlineMail className="icon_form" />
        </div>

        <div className="input_box">
          <input type="password" placeholder="Password" onChange={handleDataInput} name="password" required />
          <FiEyeOff className="icon_form" />
        </div>

        <div className="googleBtn">
          <button type="submit" onClick={handleSubmit} className="button">
            Login
          </button>

          <article>or</article>

          <GoogleOAuthProvider clientId="1054221434578-4obkp9s6tn17m7hhlg65eqm61jpv3ooe.apps.googleusercontent.com">
            <GoogleLogin
              onSuccess={handleLoginGoogle}
              onError={() => {
                setMsg('Login Failed');
              }}
            />
          </GoogleOAuthProvider>
          {/* <GoogleOAuthProvider clientId="1054221434578-4obkp9s6tn17m7hhlg65eqm61jpv3ooe.apps.googleusercontent.com">
            <GoogleLogin
              onSuccess={(credentialResponse) => {
                console.log(credentialResponse);
                var decoded = jwt_decode(credentialResponse.credential);
                console.log(decoded);
                localStorage.setItem('credential', credentialResponse.credential);
                localStorage.setItem('given_name', decoded.given_name);
                localStorage.getItem('picture', decoded.picture);
                onClose(false);
                navigate('/');
              }}
              onError={() => {
                setMsg('Login Failed');
              }}
            />
          </GoogleOAuthProvider> */}
        </div>
      </form>
    </div>
  );
  // if (!open) return null;
  // return (
  //   <div className="wrap_form">
  //     <span className={`error ${msg && 'muncul'}`}>{msg} !!</span>
  //     <div className="item_form">
  //       <h1> Log In to Your Account</h1>
  //       <CgCloseO onClick={() => onClose(false)} className="icon_close" />
  //     </div>
  //     <hr />
  //     <form>
  //       <div className="input_box">
  //         <input type="email" name="email" onChange={handleDataInput} placeholder="Email Address" pattern="^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+[.]+[a-zA-Z]{2,}$" required />
  //         <AiOutlineMail className="icon_form" />
  //       </div>

  //       <div className="input_box">
  //         <input type="password" placeholder="Password" onChange={handleDataInput} name="password" required />
  //         <FiEyeOff className="icon_form" />
  //       </div>

  //       <div className="googleBtn">
  //         <button type="submit" onSubmit={(e) => dataSend(e)} className="button">
  //           Login
  //         </button>

  //         <article>or</article>

  //         <GoogleOAuthProvider clientId="1054221434578-4obkp9s6tn17m7hhlg65eqm61jpv3ooe.apps.googleusercontent.com">
  //           <GoogleLogin
  //             onSuccess={(credentialResponse) => {
  //               console.log(credentialResponse);
  //               var decoded = jwt_decode(credentialResponse.credential);
  //               console.log(decoded);
  //               localStorage.setItem('credential', credentialResponse.credential);
  //               localStorage.setItem('given_name', decoded.given_name);
  //               localStorage.getItem('picture', decoded.picture);
  //               onClose(false);
  //               navigate('/');
  //             }}
  //             onError={() => {
  //               setMsg('Login Failed');
  //             }}
  //           />
  //         </GoogleOAuthProvider>
  //       </div>
  //     </form>
  //   </div>
  // );
};

export default Login;
