import React from "react";
import "./Hero.scss";
import profilePic from "../../assets/images/profile.png";

const Hero = () => {
  return (
    <section className="hero">
      <article className="hero__content">
        <h2 className="hero__title">{"HI, I'M FL</>IA!"}</h2>
        <p className="hero__subtitle">web developer</p>
      </article>

      <div className="hero__img-container">
        <img className="hero__img" src={profilePic} alt="profile"></img>
        <div className="hero__img-overlay"></div>
      </div>
    </section>
  );
};

export default Hero;
