import React from 'react'
import { komediya } from '../komediya';
import { useParams } from 'react-router-dom';
import look from "../../../../../assets/look.svg";
import save from "../../../../../assets/save.svg";

function KomediyaInfo() {
    const { id } = useParams();
    const selectedKomediya = komediya.find((item) => item.id === parseInt(id));
  return (
    <div className="info-container">
    {selectedKomediya.backgrounImg && (
      <div
      className="img-bg"
      style={{
        backgroundImage: `url(${selectedKomediya.backgrounImg})`,
      }}
      ></div>
    )}

    <div className="info-content">
      <img className="info-poster" src={selectedKomediya.img}  />

      <div className="info">
        <h1>{selectedKomediya.title}</h1>
        <div className='flex'>
            <p>{selectedKomediya.releaseDate}</p>
          <p className="info-genre">жанр:{selectedKomediya.janr}</p>
          <p>время:{selectedKomediya.duration}</p>
          <p> Рейтинг:{selectedKomediya.rating}</p>

          </div>        <p className="info-description">{selectedKomediya.title2}
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

  )
}

export default KomediyaInfo