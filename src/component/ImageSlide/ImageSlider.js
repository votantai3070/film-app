import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./ImageSlider.css"; // Import custom CSS file

const SlickSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  const images = [
    "assets/Image/F1.jpg",
    "assets/Image/F2.jpg",
    "assets/Image/F3.jpg",
    "assets/Image/F4.jpg",
    "assets/Image/F5.jpg",
    "assets/Image/F6.jpg",
    "assets/Image/F7.jpg",
    "assets/Image/F8.jpg",
    "assets/Image/F9.jpg",
  ];

  const source = [
    "Naruto Shippuden",
    "One Piece",
    "5 Centimet Trên Giây",
    "Kuroko No Basket",
    "Oshi No Ko",
    "Toàn Chức Cao Thủ",
    "Loving Yamada At LV999",
    "Tháng Tư Là Lời Nói Dối Của Em",
    "Hell's Paradise",
  ];

  return (
    <Slider {...settings}>
      {images.map((image, index) => (
        <div key={index} className="slider-item">
          <img src={image} alt={source} className="slider-image" />
        </div>
      ))}
    </Slider>
  );
};

export default SlickSlider;
