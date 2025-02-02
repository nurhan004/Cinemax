import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import axios from "axios";
import "./Block1.css";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import { Autoplay, EffectFade, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import look from "../../../assets/look.svg";
import { Link } from "react-router-dom";

const API_KEY = import.meta.env.VITE_TMDB_API_KEY;
const BASE_URL = "https://api.themoviedb.org/3";

function Block1() {
  const [movies, setMovies] = useState([]);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    axios
      .get(`${BASE_URL}/movie/popular?api_key=${API_KEY}&language=ru-RU`)
      .then((response) => {
        setMovies(response.data.results);
        setLoading(false);
      })

  }, []);

  
  return (
    <section>
      <div className="swiper-container">
        <Swiper
          spaceBetween={30}
          effect="fade"
          centeredSlides
          autoplay={{ delay: 3500, disableOnInteraction: false }}
          navigation
          onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
          modules={[Autoplay, EffectFade, Navigation]}
          className="mySwiper"
        >
          {movies.map((movie, index) => (
            <SwiperSlide key={movie.id}>
              <motion.div
                style={{
                  backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${
                    movie.backdrop_path
                      ? `https://image.tmdb.org/t/p/original${movie.backdrop_path}`
                      : "путь_к_запасному_изображению.jpg"
                  })`,
                  textShadow: "2px 2px 4px rgba(0, 0, 0, 0.7)",
                }}
                className="swiper-slide-bg"
                initial={{ opacity: 0, x: -50 }}
                animate={activeIndex === index ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
                transition={{ duration: 1.5, ease: "easeOut" }}
              >
                <motion.div
                  className="text-container"
                  initial={{ opacity: 0, y: 50 }}
                  animate={activeIndex === index ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                  transition={{ duration: 1, delay: 0.5 }}
                >
                  <motion.h1>{movie.title}</motion.h1>
                  <motion.p>{movie.overview || "Описание фильма отсутствует."}</motion.p>
                  <motion.div transition={{ duration: 1, delay: 1.1 }}>
                    <Link to={`/look/${movie.id}`}>
                      <button className="look">
                        <h3 className="see">Смотреть</h3>
                        <img src={look} alt="Иконка просмотра" />
                      </button>
                    </Link>
                  </motion.div>
                </motion.div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}

export default Block1;
