import React, { memo, useState } from "react";
import { FilmList } from "../../pages/ListOfFilms";
import "./Film.css";
// import { Link } from "react-router-dom";

const Film = () => {
  const [expandedFilmId, setExpandedFilmId] = useState(null);

  const handleDetailClick = (filmId) => {
    if (expandedFilmId === filmId) {
      setExpandedFilmId(null); // Close detail if its opened
    } else {
      setExpandedFilmId(filmId); // Open detail if its closed
    }
  };

  return (
    <div className="header">
      <nav>
        <ul>
          {FilmList.map((item) => {
            const isExpanded = expandedFilmId === item.id;
            return (
              <li key={item.id}>
                <div className="form">
                  <h2>{item.title}</h2>
                  <div className="img">
                    <img src={item.image} alt="" />
                  </div>
                  <div className="footer">
                    <span>{item.nation}</span>
                    <p>
                      {/* <button>
                        <Link to={`details/${item.id}`}>Detail</Link>
                      </button> */}
                      <button onClick={() => handleDetailClick(item.id)}>
                        Detail
                      </button>
                    </p>
                    <span>{item.year}</span>
                  </div>
                  {isExpanded && (
                    <div className="detail">
                      <p>{item.detail}</p>
                      {/* <a href={item.link}>link</a> */}
                    </div>
                  )}
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
