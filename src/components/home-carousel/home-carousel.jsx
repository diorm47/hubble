import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import "./home-carousel.css";

import carAva from "../../assets/images/home-carousel/car-ava.png";

import car1 from "../../assets/images/home-carousel/car-1.png";
import car2 from "../../assets/images/home-carousel/car-2.png";
import car3 from "../../assets/images/home-carousel/car-3.png";
import car4 from "../../assets/images/home-carousel/car-4.png";
import car5 from "../../assets/images/home-carousel/car-5.png";

import { ReactComponent as Prev } from "../../assets/images/home-carousel/car-prev.svg";
import { ReactComponent as Next } from "../../assets/images/home-carousel/car-next.svg";

import { ReactComponent as Play } from "../../assets/icons/play.svg";

function SampleNextArrow(props) {
  const { onClick } = props;
  return (
    <div className="car_arrow car_next_arr hover_btn_icon" onClick={onClick}>
      <Next />
    </div>
  );
}

function SamplePrevArrow(props) {
  const { onClick } = props;
  return (
    <div className="car_arrow car_prev_arr hover_btn_icon" onClick={onClick}>
      <Prev />
    </div>
  );
}

function HomeCarousel() {
  const settings = {
    arrows: true,
    className: "center",
    centerMode: true,
    slidesToScroll: 1,
    infinite: true,
    slidesToShow: 5,
    speed: 1000,
    focusOnSelect: true,

    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,

    // responsive: [
    //   {
    //     breakpoint: 1024,
    //     settings: {
    //       slidesToShow: 3,
    //       slidesToScroll: 3,
    //       infinite: true,
    //       dots: true,
    //     },
    //   },
    // ],
  };
  return (
    <div className="slider-container">
      <Slider {...settings}>
        <div className="main_page_carousel_item">
          <div className="carousel_item">
            <img src={car1} className="carousel_item_backg_img" alt="" />

            <div className="carousel_item_content">
              <div className="carousel_item_desc">
                <img src={carAva} alt="" />
                <p>YOUR TAGS</p>
                <span>17 weeks</span>
              </div>
            </div>
            <div className="carousel_video_play">
              <Play />
            </div>
          </div>
        </div>
        <div className="main_page_carousel_item">
          <div className="carousel_item">
            <img src={car2} className="carousel_item_backg_img" alt="" />

            <div className="carousel_item_content">
              <div className="carousel_item_desc">
                <img src={carAva} alt="" />
                <p>YOUR TAGS</p>
                <span>17 weeks</span>
              </div>
            </div>
            <div className="carousel_video_play">
              <Play />
            </div>
          </div>
        </div>
        <div className="main_page_carousel_item">
          <div className="carousel_item">
            <img src={car3} className="carousel_item_backg_img" alt="" />

            <div className="carousel_item_content">
              <div className="carousel_item_desc">
                <img src={carAva} alt="" />
                <p>YOUR TAGS</p>
                <span>17 weeks</span>
              </div>
            </div>
            <div className="carousel_video_play">
              <Play />
            </div>
          </div>
        </div>
        <div className="main_page_carousel_item">
          <div className="carousel_item">
            <img src={car4} className="carousel_item_backg_img" alt="" />

            <div className="carousel_item_content">
              <div className="carousel_item_desc">
                <img src={carAva} alt="" />
                <p>YOUR TAGS</p>
                <span>17 weeks</span>
              </div>
            </div>
            <div className="carousel_video_play">
              <Play />
            </div>
          </div>
        </div>
        <div className="main_page_carousel_item">
          <div className="carousel_item">
            <img src={car5} className="carousel_item_backg_img" alt="" />

            <div className="carousel_item_content">
              <div className="carousel_item_desc">
                <img src={carAva} alt="" />
                <p>YOUR TAGS</p>
                <span>17 weeks</span>
              </div>
            </div>
            <div className="carousel_video_play">
              <Play />
            </div>
          </div>
        </div>
      </Slider>
    </div>
  );
}

export default HomeCarousel;
