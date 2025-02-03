import React from 'react'
import { Link, useParams } from 'react-router-dom';
import { horror } from '../horror';

function HorrorInfo() {
    const { id } = useParams();
    const selectedHorror = horror.find((item) => item.id === parseInt(id));
  
    if (!selectedHorror) {
      return <div className="loading">Фильм не найден...</div>;
    }
  return (
    <div className="info-container">
      {selectedHorror.backgroundImg && (
        <div
          className="img-bg"
          style={{
            backgroundImage: `url(${selectedHorror.backgroundImg})`,
          }}
        ></div>
      )}

      <div className="info-content">
        <img className="info-poster" src={selectedHorror.img} alt={selectedHorror.title} />

        <div className="info">
          <h1>{selectedHorror.title}</h1>
          <p className="info-genre">{selectedHorror.janr}</p>
          <p className="info-description">{selectedHorror.title2}
          </p>
          <div className="info-buttons">
            <button className="watch-btn">Смотреть</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HorrorInfo