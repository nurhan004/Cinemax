import React from "react";
import { useParams } from "react-router-dom";
import { drama } from "../Drama";
import "./DramaInfo.css";

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
          <p className="info-genre">{selectedDrama.janr}</p>
          <p className="info-description">{selectedDrama.title2}
          </p>
          <div className="info-buttons">
            <button className="watch-btn">Смотреть</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DramaInfo;
