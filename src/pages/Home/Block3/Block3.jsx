
import './Block3.css'
import  'react';
import { useEffect, useState } from 'react';


const buttons = document.querySelectorAll(".filter-button-div button");

buttons.forEach(button => {
    button.addEventListener("click", () => {
        buttons.forEach(btn => btn.classList.remove("active"));
        button.classList.add("active");
    });
});

const  Block3 = () => {
    const [movies, setMovies] = useState([]);
    const API_KEY = import.meta.env.VITE_TMDB_API_KEY;
  
    useEffect(() => {
      async function fetchMovies() {
        const response = await fetch(
          `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=ru-RU`
        );
        const data = await response.json();
        setMovies(data.results);
      }
  
      fetchMovies();
    }, [API_KEY]);
    console.log(movies);
    
    
    
  return (
    <div className='container3'>
       <div> 
        <div className='filter-button-div'>
          <button>Новинки</button>
          <button>Популярное</button>
          <button>Смотрят сейчас</button>
          <button>Рекомендации</button>
          <button>Топ 10</button>
          <button>Скоро на Cinemax</button>
        </div>
        <div>
        <div>
       
        </div>
       </div>
    </div>
    </div>
  )
}

export default Block3