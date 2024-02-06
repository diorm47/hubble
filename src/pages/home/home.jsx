import React, { useEffect, useRef } from "react";
import { ReactComponent as Counter } from "../../assets/icons/counters.svg";
import { ReactComponent as EventsLine2 } from "../../assets/icons/events-line-2.svg";
import { ReactComponent as EventsLine } from "../../assets/icons/events-line.svg";
import { ReactComponent as HistoryLine } from "../../assets/icons/history-line.svg";
import { ReactComponent as LiveLine } from "../../assets/icons/our-live-line.svg";
import { ReactComponent as Star } from "../../assets/icons/star.svg";

import "./home.css";

import AOS from "aos";
import "aos/dist/aos.css";
import history from "../../assets/images/history.png";
import HomeCarousel from "../../components/home-carousel/home-carousel";

function Home() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  const myRef = useRef(null);

  const smoothScrollTo = (element) => {
    const targetPosition = element.getBoundingClientRect().top;
    const startPosition = window.pageYOffset;
    const distance = targetPosition - startPosition;
    const duration = 1000;
    let start = null;

    const step = (timestamp) => {
      if (!start) start = timestamp;
      const progress = timestamp - start;
      window.scrollTo(0, startPosition + distance * (progress / duration));
      if (progress < duration) window.requestAnimationFrame(step);
    };

    window.requestAnimationFrame(step);
  };

  const scrollToMyRef = () => smoothScrollTo(myRef.current);

  return (
    <>
      <header className="page_wrapper home_page">
        <div
          className="home_page_wrapper"
          data-aos="fade-down"
          data-aos-duration="2300"
        >
          <h1 className="home_header_title">
            One of Bali’s Best <br /> Shisha Lounges and <br /> Restaurants
          </h1>
          <button className="header_btn hover_btn_icon">
            DISCOVER OUR MENU
          </button>
          <div className="header_vert_line"></div>
          <div className="scroll_btn hover_btn_icon">
            <p onClick={scrollToMyRef}>Scroll</p>
          </div>
        </div>
      </header>
      <div className="history_live_wrapper" ref={myRef}>
        <section className="history_live">
          <div className="our_history">
            <div className="our_history_left">
              <h1 data-aos="fade-up" data-aos-duration="2300">
                Our History
              </h1>
              <div data-aos="fade-right" data-aos-duration="2300">
                <HistoryLine className="history_line_1" />
              </div>

              <p
                className="his_desc"
                data-aos="fade-up"
                data-aos-duration="2300"
              >
                {" "}
                Hubble is an elegant restaurant, shisha lounge and cocktail bar
                concept located in Bali’s southern Berawa neighbourhood inspired
                by the space telescope launched
              </p>
              <div
                className="history_counter"
                data-aos="fade-up"
                data-aos-duration="2300"
              >
                <Counter />
                <p>
                  {" "}
                  that continues to provide new <br /> discoveries and a
                  universe of wonder.
                </p>
              </div>
              <div
                className="history_line_2"
                data-aos="fade-right"
                data-aos-duration="2300"
              ></div>
            </div>
            <div className="our_history_right">
              <img
                src={history}
                alt=""
                data-aos="zoom-in"
                data-aos-duration="2000"
              />
            </div>
          </div>
          <div className="our_live">
            <h1 data-aos="fade-up" data-aos-duration="2300">
              OUR LIVE
            </h1>
            <div data-aos="fade-up" data-aos-duration="2300">
              <LiveLine className="our_live_line" />
            </div>
            <div
              className="carousel_wrapper"
              data-aos="fade-up"
              data-aos-duration="2300"
            >
              <HomeCarousel />
            </div>
          </div>
        </section>
      </div>

      <section className="events">
        <h1 data-aos="fade-right" data-aos-duration="2300">
          Events
        </h1>
        <div data-aos="fade-right" data-aos-duration="2000">
          <EventsLine className="events_line" />
        </div>

        <div
          className="events_desc"
          data-aos="fade-up"
          data-aos-duration="2300"
        >
          <p>
            Everyday, special events or weekend hangouts, everyone has their
            place at Hubble. Spot yourself and invite more friends!
          </p>
        </div>
        <div className="events_cards">
          <div
            className="events_cards_line"
            data-aos="fade-up"
            data-aos-duration="2300"
          >
            <EventsLine2 />
          </div>
          <div className="events_cards_wrapper">
            <div
              className="events_card "
              data-aos="zoom-in"
              data-aos-duration="2000"
            >
              <div className="events_card_desc">
                <div className="events_card_desc_wrapper">
                  <p>Aug 23</p>
                  <span>Caviar Dinner</span>
                </div>
              </div>
              <button className="header_btn more_btn_events hover_btn_icon">
                More
              </button>
            </div>
            <div className="events_card_line"></div>
            <div
              className="events_card"
              data-aos="zoom-in"
              data-aos-duration="2000"
            >
              <div className="events_card_desc">
                <div className="events_card_desc_wrapper">
                  <p>Aug 23</p>
                  <span>Caviar Dinner</span>
                </div>
              </div>
              <button className="header_btn more_btn_events hover_btn_icon">
                More
              </button>
            </div>
            <div className="events_card_line"></div>

            <div
              className="events_card"
              data-aos="zoom-in"
              data-aos-duration="2000"
            >
              <div className="events_card_desc">
                <div className="events_card_desc_wrapper">
                  <p>Aug 12</p>
                  <span>Saturday Night</span>
                </div>
              </div>
              <button className="header_btn more_btn_events hover_btn_icon">
                More
              </button>
            </div>
          </div>
        </div>
      </section>
      <section className="last_section">
        <div className="last_section_wrapper">
          <div
            className="last_section_content"
            data-aos="fade-right"
            data-aos-duration="2300"
          >
            <div>
              <Star />
              <p>OPEN DAILY </p>
            </div>
            <div className="working_time">
              <p>09.00 AM - 02.00 AM</p>
            </div>
            <button className="last_section_route hover_btn_icon">ROUTE</button>
          </div>
        </div>

        <div className="last_section_footer">
          <p>© Hubble Restaurant and Shisha Lounge 2024.</p>
          <a href="mailto:es@hubblebali.com" target="_blank">
            <p>es@hubblebali.com</p>
          </a>
        </div>
      </section>
    </>
  );
}

export default Home;
