import React, { memo } from "react";
import { FilmList } from "../ListOfFilms";
import "./Film.css";
import { Link } from "react-router-dom";

const Film = () => {
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
                    <img src={item.image} alt="" />
                  </div>
                  <div className="footer">
                    <span>{item.nation}</span>
                    <Link to={`detail/${item.id}`}>
                      <p>
                        <button>Detail</button>
                      </p>
                    </Link>
                    <span>{item.year}</span>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
};

export default memo(Film);
