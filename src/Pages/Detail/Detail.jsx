import React, { useEffect, useState } from 'react';
import { Navigate, useParams } from 'react-router-dom';
import './Detail.css';
import { BiStar } from 'react-icons/bi';
import { AiOutlinePlayCircle } from 'react-icons/ai';
import { RiCloseCircleLine } from 'react-icons/ri';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { useDispatch, useSelector } from 'react-redux';
import { getDetail, getDetailCast, getDetailVideo } from '../../App/Counter/detailSlice';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper';
import { motion } from 'framer-motion';
import { blumMasuk } from '../../App/Counter/auth';

const Detail = () => {
  const [open, setOpenVideo] = useState(false);
  const { detail, cast, video } = useSelector((state) => state.detail);
  const dispatch = useDispatch();
  const { id } = useParams();

  const API_IMG = 'https://image.tmdb.org/t/p/w500/';

  useEffect(() => {
    dispatch(getDetail(id));
    dispatch(getDetailCast(id));
    dispatch(getDetailVideo(id));
  }, [dispatch, id]);

  //CEK TOKEN
  const credential = localStorage.getItem('credential');
  if (!credential) {
    dispatch(blumMasuk(true));
    return <Navigate to="/" replace />;
  }
  const openVideo = () => {
    setOpenVideo((prev) => !prev);
  };
  return (
    <>
      <div className="Detaimov">
        {detail && (
          <motion.div className="detail_wrap" initial={{ scale: 0 }} animate={{ scale: 1 }} layoutId={detail?.id}>
            <div className="background_Detail">
              <div className="detail_item">
                <img src={API_IMG + `${detail?.backdrop_path}`} alt="Background_Detail" />
                <motion.div initial={{ x: '-100vw', opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: 0.3, duration: 0.5 }} className="detail_text">
                  <h1>{detail?.title}</h1>
                  <h3 key={detail?.id}>
                    {detail?.genres.map((detail) => {
                      return (
                        <span key={detail.id} className="genre">
                          {detail.name}
                        </span>
                      );
                    })}
                  </h3>
                  <p>{detail?.overview}</p>
                  <h3>
                    {' '}
                    <span className="start_icon">
                      {' '}
                      <BiStar />{' '}
                    </span>
                    {detail?.vote_average.toFixed(1)}
                  </h3>
                  <button onClick={openVideo} className="yt_det">
                    <AiOutlinePlayCircle className="icon_play" />
                    <span>Watch</span>
                  </button>
                </motion.div>
              </div>
              <div className={`video ${open ? 'open' : ''}`}>
                {video && (
                  <div className="wrapper_video">
                    <video className="video__" Autoplay="false" src={`https://www.themoviedb.org/video/play?key=${video[0]?.key}`} frameBorder="0" title="link video"></video>
                  </div>
                )}
                <span onClick={openVideo}>
                  {' '}
                  <RiCloseCircleLine className="close" />{' '}
                </span>
              </div>
            </div>

            <div className="cast">
              <div className="Cast_Text">
                <h1 className="text-[2rem]"> Cast and Crew Info</h1>
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
                <div className="cast_wrap">
                  {cast ? (
                    cast.map((cast) => {
                      return (
                        <SwiperSlide>
                          <div className="cast_menu">
                            <div className="img_cast">
                              <img src={API_IMG + `${cast.profile_path}`} alt="IMG Cast" />
                            </div>
                            <div className="cast_text">
                              <h2>{cast.name}</h2>
                              <h3>{cast.character}</h3>
                            </div>
                          </div>
                        </SwiperSlide>
                      );
                    })
                  ) : (
                    <h2>Loading...</h2>
                  )}
                </div>
              </Swiper>
            </div>
          </motion.div>
        )}
      </div>
    </>
  );
};

export default Detail;
