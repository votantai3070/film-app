import React from "react";
import { FilmList } from "../ListOfFilms";
import { useParams } from "react-router-dom";
import "./Details.css";

const Details = () => {
  const userName = useParams();
  const film = FilmList.find((obj) => {
    return obj.id == userName.id;
  });

  return (
    <div className="container">
      <div className="product-card">
        <div className="badge">{film.title}</div>
        <div className="product-tumb">
          <img src={`../${film.image}`} alt="" />
        </div>
        <div className="product-details">
          <p>{film.detail}</p>
        </div>
      </div>
    </div>
  );
};

export default Details;
