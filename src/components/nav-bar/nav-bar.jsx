import React, { useEffect, useState } from "react";
import { ReactComponent as ArrowDown } from "../../assets/icons/arrow-down.svg";
import { ReactComponent as MenuExit } from "../../assets/icons/exit-menu.svg";
import { ReactComponent as Menu } from "../../assets/icons/menu.svg";
import { ReactComponent as Advisor } from "../../assets/icons/socials/advisor.svg";
import { ReactComponent as Facebook } from "../../assets/icons/socials/facebook.svg";
import { ReactComponent as Instagram } from "../../assets/icons/socials/instagram.svg";
import { ReactComponent as TG } from "../../assets/icons/socials/tg.svg";
import { ReactComponent as Whatsapp } from "../../assets/icons/socials/whatsapp.svg";
import "./nav-bar.css";

import { NavLink } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/logo.svg";

import AOS from "aos";
import "aos/dist/aos.css";

function NavBar() {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  const [scrollPosition, setScrollPosition] = useState(0);

  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (visible) {
      const scrollY = window.scrollY;
      document.body.style.overflow = "hidden";
      document.body.style.width = "100%";
      document.body.style.position = "fixed";
      document.body.style.top = `-${scrollY}px`;
    } else {
      document.body.style.overflow = "";
      document.body.style.position = "";
      const scrollY = document.body.style.top;
      document.body.style.top = "";
      window.scrollTo(0, parseInt(scrollY || "0") * -1);
    }
  }, [visible]);
  return (
    <>
      <nav
        className={visible ? "visible_navigation" : ""}
        id={scrollPosition > 150 ? "filled_nav" : ""}
      >
        <div className="nav_wrapper">
          <div
            className="nav_socials"
            data-aos="fade-down"
            data-aos-duration="2300"
          >
            <a href="#" target="_blank">
              <Instagram className="hover_btn_icon" />
            </a>
            <a href="#" target="_blank">
              <TG className="hover_btn_icon" />
            </a>
            <a href="#" target="_blank">
              <Whatsapp className="hover_btn_icon" />
            </a>
            <a href="#" target="_blank">
              <Facebook className="hover_btn_icon" />
            </a>
            <a href="#" target="_blank">
              <Advisor className="hover_btn_icon" />
            </a>
          </div>
          <NavLink to="/" data-aos="fade-down" data-aos-duration="2300" className='nav_logo'>
            <Logo />
          </NavLink>
          <div
            className="nav_right"
            data-aos="fade-down"
            data-aos-duration="2300"
          >
            <div className="lang_toggler">
              <div>
                <p>En</p>
                <ArrowDown />
              </div>
            </div>
            <div className="nav_menu_btn">
              {visible ? (
                <MenuExit
                  className="hover_btn_icon"
                  onClick={() => setVisible(false)}
                />
              ) : (
                <Menu
                  className="hover_btn_icon"
                  onClick={() => setVisible(true)}
                />
              )}
            </div>
          </div>
        </div>
      </nav>
      <div className={visible ? "nav_menu nav_menu_visible" : "nav_menu"}>
        <div className="nav_menu_top_bar">
          <p>Restaurant</p>
          <button className="header_btn hover_btn_icon">Reservations</button>
        </div>
        <div className="nav_menu_links">
          <NavLink to="#">
            <p>Shisha Lounge</p>
          </NavLink>
          <NavLink to="#">
            <p>Patisserie</p>
          </NavLink>
          <NavLink to="#">
            <p>Rooftop Bar</p>
          </NavLink>
          <NavLink to="#">
            <p>MENU</p>
          </NavLink>
          <NavLink to="#">
            <p>NEWS</p>
          </NavLink>
          <NavLink to="#">
            <p>EVENT</p>
          </NavLink>
        </div>
      </div>
    </>
  );
}

export default NavBar;
