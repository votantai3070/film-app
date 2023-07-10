import React from "react";
import { FilmList } from "../ListOfFilms";
import { useParams } from "react-router-dom";
import "./Details.scss";
import { useState } from "react";
import YoutubeVideo from "../../component/YoutubeVideo/YoutubeVideo";

const Details = () => {
  const userName = useParams();
  const film = FilmList.find((obj) => {
    return obj.id == userName.id;
  });

  const [showVideo, setShowVideo] = useState(false);

  const handleShowVideo = () => {
    setShowVideo(!showVideo);
  };

  return (
    <div className="container">
      <div className="product-card">
        <div className="product-tumb">
          <img src={`../${film.image}`} alt="" />
        </div>
        <div className="product-text">
          <div className="badge">{film.title}</div>

          <div className="product-details">
            <p>{film.detail}</p>
          </div>
          <div className="product-info">
            {/* <div className="info">{film.nation}</div> */}
            <div className="category">
              <b>Thể loại:</b> {film.category}
            </div>
            <div className="info">
              <b>Năm phát hành:</b> {film.year}
            </div>
          </div>
          <div className="btn">
            <button className="btn-view" onClick={handleShowVideo}>
              {/* <ion-icon name="play"></ion-icon> */}
              <a>Xem phim</a>
            </button>
            <button className="btn-follow">Theo dõi</button>
          </div>
        </div>
      </div>
      <div className="product-video">
        {showVideo && <YoutubeVideo videoLink={film.videoId} />}
      </div>
    </div>
  );
};

export default Details;
