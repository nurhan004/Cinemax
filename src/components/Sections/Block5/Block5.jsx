import { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import './Block5.css';
import { Pagination } from 'swiper/modules';

const apiKey = import.meta.env.VITE_API_KEY || "18e278777fe86a077b3fe657f9b52f77";

const Block5 = () => {
  const [movieData, setMovieData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchRandomMovie = async () => {
      try {
        const popularMoviesUrl = `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=ru&page=1`;
        const popularResponse = await fetch(popularMoviesUrl);
        if (!popularResponse.ok) {
          throw new Error(`Ошибка запроса: ${popularResponse.status} - ${popularResponse.statusText}`);
        }
        const popularData = await popularResponse.json();

        const randomMovies = [];
        while (randomMovies.length < 3) {
          const randomIndex = Math.floor(Math.random() * popularData.results.length);
          const selectedMovie = popularData.results[randomIndex];
          if (!randomMovies.find(movie => movie.id === selectedMovie.id)) {
            randomMovies.push(selectedMovie);
          }
        }

        const movieDetailsPromises = randomMovies.map(movie =>
          fetch(`https://api.themoviedb.org/3/movie/${movie.id}?api_key=${apiKey}&language=ru`)
            .then(response => {
              if (!response.ok) {
                throw new Error(`Ошибка запроса: ${response.status} - ${response.statusText}`);
              }
              return response.json();
            })
        );

        const moviesDetails = await Promise.all(movieDetailsPromises);
        setMovieData(moviesDetails);
      } catch (error) {
        setError(error.message);
      }
    };

    fetchRandomMovie();
  }, []);

  if (error) {
    return (
      <div className="error-container">
        ❌ Ошибка: {error}
        <button onClick={() => window.location.reload()}>🔄 Попробовать снова</button>
      </div>
    );
  }

  if (!movieData) {
    return <div className="loading">⏳ Загрузка данных...</div>;
  }

  return (
    <div className="movie-container">
      <Swiper
        direction={'vertical'}
        pagination={{ clickable: true }}
        modules={[Pagination]}
        className="mySwiper"
      >
        {movieData.map((movie, index) => (
          <SwiperSlide key={index}>
            <div className="movie-slide">
              <div className="movie-content">
                <img 
                  src={movie.poster_path ? `https://image.tmdb.org/t/p/original${movie.poster_path}` : 'https://via.placeholder.com/300x450?text=Нет+постера'} 
                  alt={movie.title} 
                  className='vilm' 
                />
                <div className="movie-info">
                  <h2 className='tile'>{movie.title}</h2>
                  <p className='text'>{movie.overview || "Описание отсутствует"}</p>

                <div>
                  <button className='hit'>Смотреть</button>
                </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Block5;
