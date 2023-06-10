import React from "react";
import { FilmList } from "./ListOfFilms";
import "./Film.css";
import { useState } from "react";

const Film = () => {
  const [item, setItem] = useState([]);
  return (
    <div className="header">
      <nav>
        <ul>
          {FilmList.map((item) => {
            return (
              <li key={item.id}>
                <div className="form">
                  <h2>{item.title}</h2>
                  <div className="img">
                    <img src={item.image} />
                  </div>
                  <div className="footer">
                    <span>{item.nation}</span>
                    <button onClick={() => setItem(item)}>
                      <a href="#detail">Details</a>
                    </button>
                    <span>{item.year}</span>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </nav>
      <div id="detail" className="overlay">
        <div className="popup">
          <img src={item.image} />
          <h2>{item.title}</h2>
          <a className="close" href="#">
            X
          </a>
          <div className="content">{item.detail}</div>
        </div>
      </div>
    </div>
  );
};

export default Film;
