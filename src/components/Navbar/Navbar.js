import React from "react";
import { useState } from "react";
import "./Navbar.scss";

const Navbar = () => {
  // to change burger classes
  const [burgerClass, setBurgerClass] = useState("burger__bar");
  const [menuClass, setMenuClass] = useState("menu");
  const [isMenuClicked, setIsMenuClicked] = useState(false);

  // toggle burger menu change
  const updateMenu = (e) => {
    if (!isMenuClicked) {
      setBurgerClass("burger__bar--clicked");
      setMenuClass("menu--visible");
    } else {
      setBurgerClass("burger__bar");
      setMenuClass("menu");
    }
    setIsMenuClicked(!isMenuClicked);
  };

  const handleNavigate = (e) => {
    setBurgerClass("burger__bar");
    setMenuClass("menu");

    const el = document.getElementById(e.target.value);

    window.scrollTo({
      behavior: "smooth",
      top: el.offsetTop,
    });
  };

  return (
    <div  className="nav">
      <nav className="nav__bar">

        <div className="nav__icon">{"</>"} </div>
        <div className="burger" onClick={updateMenu}>
          <div className={burgerClass}></div>
          <div className={burgerClass}></div>
          <div className={burgerClass}></div>
        </div>
      </nav>

      <div className={menuClass}>
        <button value="home" className="menu__link" onClick={handleNavigate}>
          Home
        </button>
        <button value="skills" className="menu__link" onClick={handleNavigate}>
          Skills
        </button>
        <button
          value="projects"
          className="menu__link"
          onClick={handleNavigate}>
          Projects
        </button>
      </div>
    </div>
  );
};

export default Navbar;
