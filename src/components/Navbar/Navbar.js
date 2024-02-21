import { useState } from "react";
import { motion as m } from "framer-motion";
import "./Navbar.scss";

const Navbar = () => {
  const [burgerClass, setBurgerClass] = useState("burger__bar");
  const [menuClass, setMenuClass] = useState("menu");
  const [isMenuClicked, setIsMenuClicked] = useState(false);

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
    <m.header 
    initial={{ y: -100, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    transition={{
      delay: 2.2,
      duration: 0.5,
    }} className="nav">
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
    </m.header>
  );
};

export default Navbar;
