import React, { useEffect, useState } from 'react';
import './HomePage.css';
import image from './../Images/Header1.jpg';
// import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import { TiArrowRightOutline } from 'react-icons/ti';
import { AiOutlinePlayCircle } from 'react-icons/ai';
import spiner from '../../assets/spin-loader.gif';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper';
import Alert from '../../components/Alert';
import { AnimatePresence, motion } from 'framer-motion';
import { useSelector, useDispatch } from 'react-redux';
import { getMovies } from '../../App/Counter/movieSlice';
import { getGenre } from '../../App/Counter/genresSlice';
import { reset, resetBelumMasuk } from '../../App/Counter/auth';

const HomePage = () => {
  const { movies } = useSelector((state) => state.movies);
  const { genre } = useSelector((state) => state.genre);
  const { isMasuk } = useSelector((state) => state.auth);

  const dispatch = useDispatch();
  const API_IMG = 'https://image.tmdb.org/t/p/w500/';
  const [imageLoaded, setImageLoaded] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getMovies());
  }, [dispatch]);
  useEffect(() => {
    setTimeout(() => {
      dispatch(resetBelumMasuk(false));
    }, 3000);
  }, [isMasuk, dispatch]);

  useEffect(() => {
    dispatch(getGenre());
  }, [dispatch]);
  console.log(movies);

  const getID = (id) => {
    navigate(`/DetailPage/${id}`);
  };

  const getGendres = (genres) => {
    navigate(`/Categories/${genres}`);
  };

  const handleImageLoaded = () => {
    setImageLoaded(true);
  };

  return (
    <>
      <AnimatePresence onExitComplete={true} mode="wait">
        {isMasuk && <Alert />}
      </AnimatePresence>
      <div className="HomePage">
        <div className="HomaPage_img">
          <img src={image} alt="Img HomePage" />
        </div>
        <div className="HomePage_Text">
          <motion.h1 initial={{ x: '-100vw' }} animate={{ x: 0 }} transition={{ duration: 0.5, delay: 0.5 }} className="text-red-600 font-bold">
            Doctor Strange in the Multiverse of Madness
          </motion.h1>
          <motion.p initial={{ x: '-100vw' }} animate={{ x: 0 }} transition={{ duration: 0.5, delay: 0.59 }}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis dolore quos ipsa dicta natus quaerat odit cumque accusamus ducimus temporibus!
          </motion.p>
          <motion.div initial={{ y: '100vh', opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.5, delay: 0.53 }} className="yt">
            <AiOutlinePlayCircle className="icon_play_home" />
            <a href="https://youtu.be/Rt_UqUm38BI" target="blank">
              WATCH TRAILER
            </a>
          </motion.div>
        </div>
      </div>

      <div className="popular_wrap">
        <div className="popular_text">
          <h1 className="text-[1.3em]">Popular Movie</h1>
          <Link to="/AllMovie" className="All_Movie">
            <h2 className="text-[1.3em] flex items-center">
              See All Movie
              <span className="Arrow_icon">
                <TiArrowRightOutline />
              </span>
            </h2>
          </Link>
        </div>
      </div>

      <Swiper
        slidesPerView={5}
        spaceBetween={30}
        slidesPerGroup={1}
        loop={true}
        loopFillGroupWithBlank={true}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        className="mySwiper"
      >
        <div className="Popular_item">
          {movies ? (
            movies.map((movie) => {
              return (
                <SwiperSlide>
                  <div onClick={() => getID(movie.id)} key={movie.id} className="Popular_menu">
                    {!imageLoaded && <img className="spin-loader" src={spiner} alt="spin loader" />}
                    <img className="poster" onLoad={handleImageLoaded} src={API_IMG + `${movie.poster_path}`} alt="Movie Popular" />
                    <div className="dec">
                      <h3>{movie.title}</h3>
                      <h4>{movie.release_date}</h4>
                    </div>
                  </div>
                </SwiperSlide>
              );
            })
          ) : (
            <h2>Loading</h2>
          )}
        </div>
      </Swiper>

      <div className="popular_wrap">
        <div className="popular_text">
          <h1 className="text-[1.3em] ">Browse by Genres</h1>
          <Link to="/AllMovie" className="All_Movie">
            <h2 className="text-[1.3em] flex items-center">
              See All Movie
              <TiArrowRightOutline className="Arrow_icon" />
            </h2>
          </Link>
        </div>

        <div className="CateBtn_Wrap">
          <div className="cate_btn">
            {genre ? (
              genre.map((genre) => {
                return (
                  <button key={genre.id} onClick={() => getGendres(genre.name.toLowerCase())}>
                    {genre.name}
                  </button>
                );
              })
            ) : (
              <h2>Loading</h2>
            )}
          </div>
        </div>
      </div>

      <Swiper
        slidesPerView={5}
        spaceBetween={30}
        slidesPerGroup={1}
        loop={true}
        loopFillGroupWithBlank={true}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        className="mySwiper"
      >
        <div className="Popular_item">
          {movies ? (
            movies.map((movie) => {
              return (
                <SwiperSlide>
                  <div onClick={() => getID(movie.id)} key={movie.id} className="Popular_menu">
                    {!imageLoaded && <img className="spin-loader" src={spiner} alt="spin loader" />}
                    <img className="poster" onLoad={handleImageLoaded} src={API_IMG + `${movie.poster_path}`} alt="Movie Popular" />
                    <div className="dec">
                      <h3>{movie.title}</h3>
                      <h4>{movie.release_date}</h4>
                    </div>
                  </div>
                </SwiperSlide>
              );
            })
          ) : (
            <h2>Loading</h2>
          )}
        </div>
      </Swiper>
    </>
  );
};

export default HomePage;
