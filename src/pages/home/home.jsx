import React from "react";
import "./home.css";
import { ReactComponent as Counter } from "../../assets/icons/counters.svg";
import { ReactComponent as LiveLine } from "../../assets/icons/our-live-line.svg";
import { ReactComponent as EventsLine } from "../../assets/icons/events-line.svg";
import { ReactComponent as EventsLine2 } from "../../assets/icons/events-line-2.svg";
import { ReactComponent as Star } from "../../assets/icons/star.svg";

import history from "../../assets/images/history.png";

function Home() {
  return (
    <>
      <header className="page_wrapper home_page">
        <div className="home_page_wrapper">
          <h1 className="home_header_title">
            One of Bali’s Best <br /> Shisha Lounges and <br /> Restaurants
          </h1>
          <button className="header_btn">DISCOVER OUR MENU</button>
          <div className="header_vert_line"></div>
          <div className="scroll_btn">
            <p>Scroll</p>
          </div>
        </div>
      </header>
      <section className="history_live">
        <div className="our_history">
          <div className="our_history_left">
            <h1>Our History</h1>
            <p className="his_desc">
              {" "}
              Hubble is an elegant restaurant, shisha lounge and cocktail bar
              concept located in Bali’s southern Berawa neighbourhood inspired
              by the space telescope launched
            </p>
            <div className="history_counter">
              <Counter />
              <p>
                {" "}
                that continues to provide new <br /> discoveries and a universe
                of wonder.
              </p>
            </div>
          </div>
          <div className="our_history_right">
            <img src={history} alt="" />
          </div>
        </div>
        <div className="our_live">
          <h1>OUR LIVE</h1>
          <LiveLine className="our_live_line" />
        </div>
      </section>
      <section className="events">
        <h1>Events</h1>
        <EventsLine className="events_line" />
        <div className="events_desc">
          <p>
            Everyday, special events or weekend hangouts, everyone has their
            place at Hubble. Spot yourself and invite more friends!
          </p>
        </div>
        <div className="events_cards">
          <div className="events_cards_line">
            <EventsLine2 />
          </div>
          <div className="events_cards_wrapper">
            <div className="events_card"></div>
            <div className="events_card_line"></div>
            <div className="events_card"></div>
            <div className="events_card_line"></div>

            <div className="events_card"></div>
          </div>
        </div>
      </section>
      <section className="last_section">
        <div className="last_section_content">
          <div>
            <Star />
            <p>OPEN DAILY </p>
          </div>
          <div className="working_time">
            <p>09.00 AM - 02.00 AM</p>
          </div>
          <button className="last_section_route">ROUTE</button>
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
