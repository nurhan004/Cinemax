import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Block4.css";

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
  const [currentIndex, setCurrentIndex] = useState({});
  const [open, setOpen] = useState("Новинки");

  const slidesToShow = 4; 

  useEffect(() => {
    Object.entries(categories).forEach(([category, apiCategory]) => {
      fetchMovies(category, apiCategory);
    });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);


  const getRandomMovies = (movies, count) => {
    const shuffled = movies.sort(() => 0.5 - Math.random()); 
    return shuffled.slice(0, count); 
  };

  const fetchMovies = async (category, apiCategory) => {
    try {
      const url = `https://api.themoviedb.org/3/movie/${apiCategory}?api_key=${apiKey}&language=ru&page=1`;
      const response = await fetch(url);
      if (!response.ok) throw new Error("Ошибка загрузки");

      const data = await response.json();
      const randomMovies = getRandomMovies(data.results, 10); 
      setMovies((prev) => ({ ...prev, [category]: randomMovies }));
      setCurrentIndex((prev) => ({ ...prev, [category]: 0 }));
    } catch (err) {
      setError(err.message);
    }
  };

  const nextSlide = (category) => {
    if (!movies[category] || movies[category].length <= slidesToShow) return;
    setCurrentIndex((prev) => ({
      ...prev,
      [category]: Math.min(prev[category] + slidesToShow, movies[category].length - slidesToShow)
    }));
  };

  const prevSlide = (category) => {
    if (!movies[category] || movies[category].length <= slidesToShow) return;
    setCurrentIndex((prev) => ({
      ...prev,
      [category]: Math.max(prev[category] - slidesToShow, 0)
    }));
  };

  const handleTabOpen = (tab) => setOpen(tab);

  if (error) return <div className="error">❌ Ошибка: {error}</div>;
  if (!movies[open]) return <div className="loading">⏳ Загрузка...</div>;

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
        <button onClick={() => prevSlide(open)} className="carousel-btn left">⬅</button>

        <div className="carousel">
          <div className="carousel-track" style={{ transform: `translateX(-${(currentIndex[open] / slidesToShow) * 100}%)` }}>
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

        <button onClick={() => nextSlide(open)} className="carousel-btn right">➡</button>
      </div>
    </div>
  );
};

export default Block4;