import React, { useState } from "react";
import "./Block2.css";
import searchIcon from "../../../assets/search.svg";

function Block2() {
  const [query, setQuery] = useState("");

  return (
    <section>
      <div className="block2">
        <div className="block2-content">
          <h1>Поиск по сайту</h1>
          <p>На нашем сайте вы найдете подходящие вам фильмы и сериалы</p>
          <div className="search-container">
            <input
              type="text"
              placeholder="Поиск..."
              className="search-input"
            />
            <img src={searchIcon} alt="Иконка поиска" className="search-icon" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Block2;
