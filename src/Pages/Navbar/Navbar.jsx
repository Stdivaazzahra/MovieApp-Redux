import React, { useState } from 'react';
import { BiSearchAlt } from 'react-icons/bi';
import './Navbar.css';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import Login from '../Login/Login';
import Register from '../Register/Register';
import { GoogleOAuthProvider } from '@react-oauth/google';
import { motion } from 'framer-motion';
import { blumMasuk } from '../../App/Counter/auth';
import { useDispatch } from 'react-redux';

const Navbar = () => {
  const [dataSearch, setDataSearch] = useState();
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenRes, setIsOpenRes] = useState(false);
  const [setIsOpenGlg] = useState(false);

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const credential = localStorage.getItem('credential');
  const searchBtn = (name) => {
    if (!credential) {
      dispatch(blumMasuk(true));
      return <Navigate to="/" replace />;
    } else {
      if (name) {
        navigate(`/Search/${name}`);
      }
    }
    setDataSearch('');
  };

  const variantsNav = {
    hidden: {
      opacity: 0,
      y: '-100vh',
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
      },
    },
    exit: {
      opacity: 0,
      y: '-100vh',
    },
  };

  return (
    <div className="navbar_wrap fixed z-10 overflow-hidden w-full">
      <motion.div variants={variantsNav} initial="hidden" animate="visible" exit="exit">
        <div className="navbar">
          <Link className="Navbar_Title text-[2em] text-[#b50e0e]" to="/">
            <motion.h1 initial={{ x: '-100vw' }} animate={{ x: 0 }} exit={{ x: '-100vw' }} transition={{ duration: 0.5, delay: 1 }}>
              MovieList
            </motion.h1>
          </Link>
          <div className="Navbar_search w-[30%] border-[#b50e0e]">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                searchBtn(dataSearch);
              }}
              className="search_btn"
            >
              <input onChange={(e) => setDataSearch(e.target.value)} value={dataSearch} className="cari" type="text" placeholder="What do you want to watch?" />
              <button type="submit">
                <BiSearchAlt className="navbar_icon text-[#b50e0e] font-black" />
              </button>
            </form>
          </div>

          <motion.div className="navbar_bottom" initial={{ x: '100vw' }} animate={{ x: 0 }} exit={{ x: '100vw' }} transition={{ duration: 0.5, delay: 1 }}>
            {credential ? (
              <>
                <span className="name text-[#b50e0e] font-extrabold">{localStorage.getItem('name')}</span>
                <img className="avatar" src="https://fanbookcdn.fanbook.me/profile/2018/11/30/fde1d526a4a242a9943b48e76d4309b6_1543549001144.png" alt="avatar user" />
                <span
                  onClick={() => {
                    localStorage.clear();
                    navigate('/');
                  }}
                  className="name text-[#b50e0e] font-extrabold"
                >
                  LOGOUT
                </span>
              </>
            ) : (
              // : credential ? (
              //   <>
              //     <span className="name"> {localStorage.getItem('given_name')} </span>
              //     <img className="avatar" src="https://i.pinimg.com/originals/87/25/26/87252688f7652c9e5c777e0c735cf4fb.jpg" alt="avatar user" />
              //     <span
              //       onClick={() => {
              //         localStorage.clear();
              //         navigate('/');
              //       }}
              //       className="name"
              //     >
              //       LOGOUT
              //     </span>
              //   </>
              // )
              <>
                <button onClick={() => setIsOpen(true)} className="login text-[#b50e0e] font-extrabold ">
                  Login
                </button>
                <GoogleOAuthProvider onClick={() => setIsOpenGlg(true)} />
                <button onClick={() => setIsOpenRes(true)} className="register bg-[#b50e0e] font-extrabold text-white ">
                  Register
                </button>
              </>
            )}
          </motion.div>
        </div>
      </motion.div>
      <Login open={isOpen} onClose={setIsOpen} />
      <Register openRes={isOpenRes} onCloseRes={setIsOpenRes} />
    </div>
  );
};

export default Navbar;
