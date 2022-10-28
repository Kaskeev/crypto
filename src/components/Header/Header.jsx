import React, { useEffect } from "react";
import styles from "../Header/Header.css";
import picture from "../../assets/header-right.png";
import arrowDown from "../../assets/arrow-down.svg";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-scroll";
import Menu from "../Menu/Menu";
import { useState } from "react";

const Header = () => {
  const [menuActive, setMenuActive] = useState(false);
  AOS.init({
    duration: 2200,
  });
  const items = [
    { value: "Activities" },
    { value: "Technology" },
    { value: "R&D" },
    { value: "Community" },
  ];
  return (
    <header className="header">
      <div className="container">
        <nav className="header__block">
          <div className="header-block-l" data-aos={"fade-right"}>
            <h1 className="header__logo">C</h1>
            <div className="navbar">
              <ul className="header__l-list">
                {items.map((item) => (
                  <li className="header__list-link">
                    <a>{item.value}</a>
                  </li>
                ))}
              </ul>
              <div className="header__block-r" data-aos={"fade-left"}>
                <button className="header__r-btn">Career</button>
              </div>
            </div>
          </div>
          <div
            className="burger__btn"
            onClick={() => setMenuActive(!menuActive)}
          >
            <span />
          </div>
        </nav>
      </div>
      <div className="header__block-bottom" data-aos={"fade-up"}>
        <div className="container">
          <h3 className="h__bottom-title">crypto trading</h3>
          <p className="h__bottom-text">Engineers Meet</p>
          <p className="h__bottom-text blue__text">Traders __</p>
          <span className="h__bottom-text-b">
            Advanced crypto algorithmic trading and efficient cross-chain
            execution, at scale.
          </span>
        </div>
        <div className="h__bottom-pic">
          <img src={picture} alt="" />
        </div>
        <div className="h__bottom-btn">
          <button>Learn More</button>
          <div className="h__bottom-btn-img">
            <img src={arrowDown} alt="" />
          </div>
        </div>
      </div>

      <Menu
        active={menuActive}
        setActive={setMenuActive}
        header={"C"}
        items={items}
      />
    </header>
  );
};

export default Header;