import React from "react";
import { useParams } from "react-router-dom";
import { drama } from "../Drama";
import "./DramaInfo.css";
import look from "../../../../../assets/look.svg";
import save from "../../../../../assets/save.svg";


function DramaInfo() {
  const { id } = useParams();
  const selectedDrama = drama.find((item) => item.id === parseInt(id));

  if (!selectedDrama) {
    return <div className="loading">Фильм не найден...</div>;
  }

  return (
    <div className="info-container">
      {selectedDrama.backgroundImg && (
        <div
          className="img-bg"
          style={{
            backgroundImage: `url(${selectedDrama.backgroundImg})`,
          }}
        ></div>
      )}

      <div className="info-content">
        <img className="info-poster" src={selectedDrama.img} alt={selectedDrama.title} />

        <div className="info">
          <h1>{selectedDrama.title}</h1>
          <div className='flex'>
            <p>{selectedDrama.releaseDate}</p>
          <p className="info-genre">жанр:{selectedDrama.janr}</p>
          <p>время:{selectedDrama.duration}</p>
          <p> Рейтинг:{selectedDrama.rating}</p>

          </div>
          <p className="info-description">{selectedDrama.title2}
          </p>
                     <div className="info-buttons">
                             <button className="watch-btn">
                                    Смотреть по подписке <img src={look} alt="Смотреть" />
                                  </button>
                                  <button className="watch-btn">
                                  избранное <img src={save} alt="Смотреть" />
                                  </button>        </div>
        </div>
      </div>
    </div>
  );
}

export default DramaInfo;
