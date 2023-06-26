import React, { memo, useState } from "react";
import { FilmList } from "../ListOfFilms";
import "./Film.css";
// import { Link } from "react-router-dom";

const Film = () => {
  const [expandedFilmId, setExpandedFilmId] = useState(null);

  const handleDetailClick = (filmId) => {
    if (expandedFilmId === filmId) {
      setExpandedFilmId(null); // Đóng phần chi tiết nếu đã mở rồi
    } else {
      setExpandedFilmId(filmId); // Mở phần chi tiết của phim được chọn
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
