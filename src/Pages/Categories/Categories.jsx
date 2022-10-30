import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams, useNavigate, Navigate } from 'react-router-dom';
import './Categories.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper';
import CardList from './cardList/CardList';
import { useDispatch, useSelector } from 'react-redux';
import { blumMasuk } from '../../App/Counter/auth';
import { getGenre } from '../../App/Counter/genresSlice';
// import { getSearchGen, searchGenSelectors } from '../../App/Counter/searchSlice';
import { getSearchGen} from '../../App/Counter/searchGenSlice';

const Categories = () => {
  const { genre } = useSelector((state) => state.genre);
  const { searchGen } = useSelector((state) => state.searchGen);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { genres } = useParams();
  // const dispatch = useDispatch();
  // const API_Cate = 'https://api.themoviedb.org/3/genre/movie/list?api_key=9cc1bc46ae7070abb9a43667213d613a&language=en-US';
  // const API_SEARCH = 'https://api.themoviedb.org/3/search/movie?api_key=9cc1bc46ae7070abb9a43667213d613a&query=' + genres;
  // const [cate, setCate] = useState();
  // const [data, setData] = useState();
  // useEffect(() => {
  //   axios
  //     .get(API_SEARCH)
  //     .then((res) => setData(res.data.results))
  //     .catch((err) => console.log(err));
  // }, [API_SEARCH]);

  // useEffect(() => {
  //   axios
  //     .get(API_Cate)
  //     .then((res) => {
  //       setCate(res.data.genres);
  //     })
  //     .catch((err) => console.log(err));
  // }, [API_Cate]);

  useEffect(() => {
    dispatch(getGenre())
  }, [dispatch]);
  // console.log(movies);

  // useEffect(() => {
  //   dispatch(getSearch())
  // }, [dispatch]);
 
  useEffect(() => {
    dispatch(getSearchGen(genres))
  }, [dispatch, genres]);



  //CEK TOKEN
  const credential = localStorage.getItem('credential');
  if (!credential) {
    dispatch(blumMasuk());
    return <Navigate to="/" replace />;
  }

  const getID = (id) => {
    navigate(`/DetailPage/${id}`);
  };
  //fungsi getGendres
  const getGendres = (genres) => {
    navigate(`/Categories/${genres}`);
  };

  return (
    <div className="category_page">
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
      <div className="Search_wrap">
        <h1 className="text-[2.5em]">Showing Movies With "{genres.replace(genres.charAt(0), genres.charAt(0).toUpperCase())}" Genre</h1>
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
        {searchGen ? (
            searchGen.map((searchGen) => {
            return (
              <SwiperSlide>
                <CardList getID={getID} item={searchGen} />
              </SwiperSlide>
             );
            })
          ) : (
            <h2>Loading</h2>
          )}
      </div>
      </Swiper>
    </div>
  );
};

export default Categories;
