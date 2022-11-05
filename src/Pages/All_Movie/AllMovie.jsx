import React, { useContext, useEffect, useState } from 'react';
import './AllMovie.css';
import { Link, Navigate } from 'react-router-dom';
import image2 from './../Images/Header3.jpg';
import spiner from '../../assets/spin-loader.gif';
import { motion } from 'framer-motion';
import { useDispatch, useSelector } from 'react-redux';
import { getAllMovie } from '../../App/Counter/movieSlice';

const AllMovie = () => {
  const { allMovie } = useSelector((state) => state.movies)
  const dispatch = useDispatch();
  const API_IMG = 'https://image.tmdb.org/t/p/w500/';
  const [imageLoaded, setImageLoaded] = useState(true);

  useEffect(() => {
    dispatch(getAllMovie())
  }, [dispatch]);

  //CEK TOKEN
  const credential = localStorage.getItem('credential');
  if (!credential) {
    return <Navigate to="/" replace />;
  }

  const handleImageLoaded = () => {
    setImageLoaded(true);
  };

  return (
    <div>
      <header className="listAll_img">
        <img src={image2} alt="Header List All" />
      </header>
      <div className="All_text">
        <h1>All Movies</h1>
      </div>
      <div className="Popular_item_wrap_all">
        {allMovie ? (
          allMovie.map((allMovie, i) => {
            return (
              <motion.div initial={{ x: i % 2 === 0 ? '-100vw' : '100vw' }} animate={{ x: 0 }} transition={{ duration: 0.3, delay: i * 0.05 }} exit={{ x: i % 2 === 0 ? '-100vw' : '100vw' }}>
                <Link key={allMovie.id} className="Popular_menu_all" to={`/DetailPage/${allMovie.id}`}>
                  {!imageLoaded && <img className="spin-loader" src={spiner} alt="spin loader" />}
                  <img className="poster_all" onLoad={handleImageLoaded} src={API_IMG + `${allMovie.poster_path}`} alt="Movie Popular" />
                  <div className="dec">
                    <h3>{allMovie.title}</h3>
                    <h4>{allMovie.release_date}</h4>
                  </div>
                </Link>
              </motion.div>
            );
          })
        ) : (
          <h2>Loading</h2>
        )}
      </div>
    </div>
  );
};

export default AllMovie;
