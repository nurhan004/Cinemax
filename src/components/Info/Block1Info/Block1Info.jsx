import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import "./Block1Info.css";
import look from "../../../assets/look.svg";
import save from "../../../assets/save.svg";

const API_KEY = import.meta.env.VITE_TMDB_API_KEY;
const BASE_URL = "https://api.themoviedb.org/3";

function Block1Info() {
  const { id } = useParams();
  const [info, setInfo] = useState(null);

  useEffect(() => {
    fetch(`${BASE_URL}/movie/${id}?api_key=${API_KEY}&language=ru-RU`)
      .then((res) => res.json())
      .then((data) => setInfo(data));
  }, [id]);

  if (!info) return <div className="loading">Загрузка...</div>;

  return (
    <div>
      <section>
        <div className="info-container">
          {info.backdrop_path && (
            <div
              className="img-bg"
              style={{
                backgroundImage: `url(https://image.tmdb.org/t/p/original${info.backdrop_path})`,
              }}
            ></div>
          )}

          <div className="info-content">
            {info.poster_path && (
              <img
                className="info-poster"
                src={`https://image.tmdb.org/t/p/w500${info.poster_path}`}
                alt={info.title}
              />
            )}

            <div className="info">
              <h1>{info.title}</h1>
              <div className="info-details">
                <p>{info.release_date?.split("-")[0] }</p>
                <p>{info.runtime ? `${info.runtime} мин` : "Нет данных"}</p>
                <p>{info.adult ? "18+" : "12+"}</p>
                <p>{info.production_countries?.[0]?.iso_3166_1 || "N/A"}</p>
              </div>
              <p className="info-description">{info.overview || "Описание отсутствует"}</p>
              <div className="info-buttons">
                <button className="watch-btn">
                  Смотреть по подписке <img src={look} alt="Смотреть" />
                </button>
                <button className="watch-btn">
                избранное <img src={save} alt="Смотреть" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}

export default Block1Info;