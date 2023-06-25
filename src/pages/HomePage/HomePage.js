import React from "react";
import Film from "../FilmPage/Film";
import SlickSlider from "../../component/ImageSlide/ImageSlider";
import "./HomePage.css";

const HomePage = () => {
  return (
    <div>
      <SlickSlider />
      <div className="filmPage">
        <Film />
      </div>
    </div>
  );
};

export default HomePage;
