import { useEffect, useState, useCallback, useRef } from "react";
import { Link } from "react-router-dom";
import "./Block4.css";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa6";

const apiKey = import.meta.env.VITE_API_KEY || "18e278777fe86a077b3fe657f9b52f77";

const categories = {
  "Новинки": "now_playing",
  "Популярное": "popular",
  "Смотрят сейчас": "top_rated",
  "Рекомендации": "upcoming",
  "Топ 10": "popular",
  "Скоро на Cinemax": "upcoming"
};

const Block4 = () => {
  const [movies, setMovies] = useState({});
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [open, setOpen] = useState("Новинки");
  const currentIndexRef = useRef({});

  const slidesToShow = 4;

  const getRandomMovies = (movies, count) => {
    return [...movies].sort(() => 0.5 - Math.random()).slice(0, count);
  };

  const fetchMovies = useCallback(async (category, apiCategory) => {
    try {
      const url = `https://api.themoviedb.org/3/movie/${apiCategory}?api_key=${apiKey}&language=ru&page=1`;
      const response = await fetch(url);
      if (!response.ok) throw new Error("Ошибка загрузки");

      const data = await response.json();
      const randomMovies = getRandomMovies(data.results, 10);

      setMovies((prev) => ({ ...prev, [category]: randomMovies }));
      currentIndexRef.current[category] = 0;
    } catch (err) {
      setError(err.message);
    }
  }, []);

  useEffect(() => {
    setIsLoading(true);
    Promise.all(Object.entries(categories).map(([category, apiCategory]) => fetchMovies(category, apiCategory)))
      .then(() => setIsLoading(false));
  }, [fetchMovies]);

  const nextSlide = (category) => {
    if (!movies[category] || movies[category].length <= slidesToShow) return;
    const newIndex = Math.min(currentIndexRef.current[category] + slidesToShow, movies[category].length - slidesToShow);
    currentIndexRef.current[category] = newIndex;
  };

  const prevSlide = (category) => {
    if (!movies[category] || movies[category].length <= slidesToShow) return;
    const newIndex = Math.max(currentIndexRef.current[category] - slidesToShow, 0);
    currentIndexRef.current[category] = newIndex;
  };

  const handleTabOpen = (tab) => setOpen(tab);

  if (error) return <div className="error">Ошибка: {error}</div>;
  if (isLoading) return <div className="loading">⏳ Загрузка...</div>;

  return (
    <div className="block4">
      <div className="tabs">
        {Object.keys(categories).map((tab) => (
          <a key={tab} onClick={() => handleTabOpen(tab)} className={`tab-item ${open === tab ? "active" : ""}`}>
            {tab}
          </a>
        ))}
      </div>

      <div className="carousel-container">
        <button onClick={() => prevSlide(open)} className="carousel-btn-left"><FaArrowLeft /></button>

        <div className="carousel">
          <div
            className="carousel-track"
            style={{ transform: `translateX(-${(currentIndexRef.current[open] / slidesToShow) * 100}%)`, transition: "transform 0.5s ease-in-out" }}
          >
            {movies[open].map((movie) => (
              <div key={movie.id} className="carousel-slide">
                <div className="movie-card">
                  <div className="rating">{movie.vote_average.toFixed(1)}</div>
                  <Link to={`/look/${movie.id}`}>
                    <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
                  </Link>
                  <h2>{movie.title}</h2>
                  <p>{movie.release_date ? movie.release_date.split("-")[0] : "Нет данных"}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <button onClick={() => nextSlide(open)} className="carousel-btn-right"><FaArrowRight /></button>
      </div>
    </div>
  );
};

export default Block4;
