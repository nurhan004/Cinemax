import  { useState, useEffect } from 'react';
import './Block4.css'

const buttons = document.querySelectorAll(".filter-button-div button");

buttons.forEach(button => {
    button.addEventListener("click", () => {
        buttons.forEach(btn => btn.classList.remove("active"));
        button.classList.add("active");
    });
});

const API_KEY = '18e278777fe86a077b3fe657f9b52f77'; 

const Block4 = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchMovies() {
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=ru-RU`
        );
        
        if (!response.ok) throw new Error("Ошибка загрузки фильмов");

        const data = await response.json();
        setMovies(data.results);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    fetchMovies();
  }, []);
  console.log(movies);
  

  if (loading) return <p>Загрузка...</p>;
  if (error) return <p>Ошибка: {error}</p>;

  return (
    <div>
      <div className='filter-button-div'>
        <button>Новинки</button>
        <button>Популярное</button>
        <button>Смотрят сейчас</button>
        <button>Рекомендации</button>
        <button>Топ 10</button>
        <button>Скоро на Cinemax</button>
      </div>
      <ul>
        {movies.map(movie => (
          <div key={movie.id}>
                <img src={`${API_KEY}${movie.poster_path}`} 
                alt={movie.title} />
          </div>
         
        ))}
      </ul>
    </div>
  );
};

export default Block4;