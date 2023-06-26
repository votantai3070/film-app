import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./ImageSlider.css"; // Import custom CSS file

const SlickSlider = () => {
  const settings = {
    // centerMode: true,
    // centerPadding: "20px",
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  const images = [
    { img: "assets/Image/F1.jpg", alt: "Naruto Shippuden" },
    { img: "assets/Image/F2.jpg", alt: "One Piece" },
    { img: "assets/Image/F3.jpg", alt: "5 Centimet Trên Giây" },
    { img: "assets/Image/F4.jpg", alt: "Kuroko No Basket" },
    { img: "assets/Image/F5.jpg", alt: "Oshi No Ko" },
    { img: "assets/Image/F6.jpg", alt: "Toàn Chức Cao Thủ" },
    { img: "assets/Image/F7.jpg", alt: "Loving Yamada At LV999" },
    { img: "assets/Image/F8.jpg", alt: "Tháng Tư Là Lời Nói Dối Của Em" },
    { img: "assets/Image/F9.jpg", alt: "Hell's Paradise" },
  ];

  return (
    <Slider {...settings}>
      {images.map((image, index) => (
        <div key={index} className="slider-item">
          <img src={image.img} alt={image.alt} className="slider-image" />
        </div>
      ))}
    </Slider>
  );
};

export default SlickSlider;
