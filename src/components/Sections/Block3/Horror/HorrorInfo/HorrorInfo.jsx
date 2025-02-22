import React from 'react'
import { Link, useParams } from 'react-router-dom';
import { horror } from '../horror';
import "./HorrorInfo.css"
import look from "../../../../../assets/look.svg";
import save from "../../../../../assets/save.svg";

function HorrorInfo() {
    const { id } = useParams();
    const selectedHorror = horror.find((item) => item.id === parseInt(id));
  

  return (
    <div className="info-container">
      {selectedHorror.backgrounImg && (
        <div
          className="img-bg"
          style={{
            backgroundImage: `url(${selectedHorror.backgrounImg})`,
          }}
        ></div>
      )}

      <div className="info-content">
        <img className="info-poster" src={selectedHorror.img} alt={selectedHorror.title} />

        <div className="info">
          <h1>{selectedHorror.title}</h1>
          <div className='flex'>
            <p>{selectedHorror.releaseDate}</p>
          <p className="info-genre">жанр:{selectedHorror.janr}</p>
          <p>время:{selectedHorror.duration}</p>
          <p> Рейтинг:{selectedHorror.rating}</p>

          </div>
          <p className="info-description">{selectedHorror.title2}</p>
          <div className="info-buttons">
           <button className="watch-btn">
                  Смотреть по подписке <img src={look} alt="Смотреть" />
                </button>
                <button className="watch-btn">
                избранное <img src={save} alt="Смотреть" />
                </button>          </div>
        </div>
      </div>
    </div>
  )
}

export default HorrorInfo