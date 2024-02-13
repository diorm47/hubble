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
import StoriesCarousel from "../stories/stories";
import { ReactComponent as Play } from "../../assets/icons/play.svg";

// stories
import stores_1_1 from "../../assets/images/stories/1/378391552_17884049468927404_5581637248359215194_n.jpg";
import stores_1_2 from "../../assets/images/stories/1/378518333_17884049675927404_3776021092824241060_n.jpg";
import stores_1_3 from "../../assets/images/stories/1/383398291_17886114113927404_8155053389661514834_n.jpg";

import stores_2_1 from "../../assets/images/stories/2/384567629_17886364073927404_5726687263937734417_n.jpg";
import stores_2_2 from "../../assets/images/stories/2/401561757_17892374690927404_9058162119049788806_n.jpg";
import stores_2_3 from "../../assets/images/stories/2/404089897_17893473809927404_8922201785345119260_n.jpg";

import stores_3_1 from "../../assets/images/stories/3/347840986_231902919469154_3497827678328269703_n.jpg";
import stores_3_2 from "../../assets/images/stories/3/347855366_2296696150533099_7084397008046776566_n.jpg";
import stores_3_3 from "../../assets/images/stories/3/383389441_17885336246927404_7167224161150394369_n.jpg";
import stores_3_4 from "../../assets/images/stories/3/384542877_17886211295927404_7956043666636022466_n.jpg";

import stores_4_1 from "../../assets/images/stories/4/381176001_17885404997927404_7960218041838499967_n.jpg";
import stores_4_2 from "../../assets/images/stories/4/382997484_17885404127927404_5704800582810416627_n (1).jpg";

import stores_5_1 from "../../assets/images/stories/5/378391552_17884049468927404_5581637248359215194_n.jpg";
import stores_5_2 from "../../assets/images/stories/5/378518333_17884049675927404_3776021092824241060_n.jpg";
import stores_5_3 from "../../assets/images/stories/5/383398291_17886114113927404_8155053389661514834_n.jpg";

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

    responsive: [
      {
        breakpoint: 1430,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 920,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const stories = [
    {
      url: stores_1_1,
      header: {
        heading: "MASTERPIECES",
      },
    },
    {
      url: stores_1_2,
      header: {
        heading: "MASTERPIECES",
      },
    },
    {
      url: stores_1_3,
      header: {
        heading: "MASTERPIECES",
      },
    },
  ];
  const stories2 = [
    {
      url: stores_2_1,
      header: {
        heading: "MASTERPIECES",
      },
    },
    {
      url: stores_2_2,
      header: {
        heading: "MASTERPIECES",
      },
    },
    {
      url: stores_2_3,
      header: {
        heading: "MASTERPIECES",
      },
    },
  ];
  const stories3 = [
    {
      url: stores_3_1,
      header: {
        heading: "MASTERPIECES",
      },
    },
    {
      url: stores_3_2,
      header: {
        heading: "MASTERPIECES",
      },
    },
    {
      url: stores_3_3,
      header: {
        heading: "MASTERPIECES",
      },
    },
    {
      url: stores_3_4,
      header: {
        heading: "MASTERPIECES",
      },
    },
  ];
  const stories4 = [
    {
      url: stores_4_1,
      header: {
        heading: "MASTERPIECES",
      },
    },
    {
      url: stores_4_2,
      header: {
        heading: "MASTERPIECES",
      },
    },
  ];

  const stories5 = [
    {
      url: stores_5_1,
      header: {
        heading: "MASTERPIECES",
      },
    },
    {
      url: stores_5_2,
      header: {
        heading: "MASTERPIECES",
      },
    },
    {
      url: stores_5_3,
      header: {
        heading: "MASTERPIECES",
      },
    },
  ];
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
              <StoriesCarousel stories={stories} />
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
              <StoriesCarousel stories={stories2} />
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
              <StoriesCarousel stories={stories3} />
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
              <StoriesCarousel stories={stories4} />
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
              <StoriesCarousel stories={stories5} />
            </div>
          </div>
        </div>
      </Slider>
    </div>
  );
}

export default HomeCarousel;
