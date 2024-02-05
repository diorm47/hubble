import React from "react";
import "./home.css";
function Home() {
  return (
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
  );
}

export default Home;
