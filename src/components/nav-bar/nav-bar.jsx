import React, { useState } from "react";
import "./nav-bar.css";
import { ReactComponent as Instagram } from "../../assets/icons/socials/instagram.svg";
import { ReactComponent as TG } from "../../assets/icons/socials/tg.svg";
import { ReactComponent as Whatsapp } from "../../assets/icons/socials/whatsapp.svg";
import { ReactComponent as Facebook } from "../../assets/icons/socials/facebook.svg";
import { ReactComponent as Advisor } from "../../assets/icons/socials/advisor.svg";
import { ReactComponent as ArrowDown } from "../../assets/icons/arrow-down.svg";
import { ReactComponent as Menu } from "../../assets/icons/menu.svg";
import { ReactComponent as MenuExit } from "../../assets/icons/exit-menu.svg";

import { ReactComponent as Logo } from "../../assets/logo.svg";
import { NavLink } from "react-router-dom";

function NavBar() {
  const [visible, setVisible] = useState(false);
  return (
    <>
      <nav className={visible ? "visible_navigation" : ""}>
        <div className="nav_wrapper">
          <div className="nav_socials">
            <a href="#" target="_blank">
              <Instagram />
            </a>
            <a href="#" target="_blank">
              <TG />
            </a>
            <a href="#" target="_blank">
              <Whatsapp />
            </a>
            <a href="#" target="_blank">
              <Facebook />
            </a>
            <a href="#" target="_blank">
              <Advisor />
            </a>
          </div>
          <NavLink to="/">
            <Logo />
          </NavLink>
          <div className="nav_right">
            <div className="lang_toggler">
              <div>
                <p>En</p>
                <ArrowDown />
              </div>
            </div>
            <div className="nav_menu_btn">
              {visible ? (
                <MenuExit onClick={() => setVisible(false)} />
              ) : (
                <Menu onClick={() => setVisible(true)} />
              )}
            </div>
          </div>
        </div>
      </nav>
      <div className={visible ? "nav_menu nav_menu_visible" : "nav_menu"}>
        <div className="nav_menu_top_bar">
          <p>Restaurant</p>
          <button className="header_btn">Reservations</button>
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
