import React from "react";
import { motion } from "framer-motion";
import "./Hero.scss";
import profilePic from "../../assets/images/profile.png";

const Hero = () => {
  return (
    <section className="hero" id="home">
      <div className="hero__title">
        <motion.div
          initial={{ x: -600, scale: 0 }}
          animate={{ x: 15, scale: 1 }}
          transition={{
            delay: 0.8,
            duration: 0.5,
            type: "spring",
            stiffness: 40,
          }}
          className="hero__title-left">
          FL
        </motion.div>
        <motion.div
          animate={{ rotate: 90 }}
          transition={{ duration: 1, type: "spring", stiffness: 25 }}
          className="hero__title-mid">
          {"</>"}
        </motion.div>
        <motion.div
          initial={{ x: 600, scale: 0 }}
          animate={{ x: -18, scale: 1 }}
          transition={{
            delay: 0.8,
            duration: 0.5,
            type: "spring",
            stiffness: 40,
          }}
          className="hero__title-rigth">
          IA
        </motion.div>
      </div>
      <p className="hero__subtitle">web developer</p>

      <article className="bio"></article>

      <div className="hero__profile-container">
        <img className="hero__img" src={profilePic} alt="profile"></img>
        <article className="bio">
        <h2 className="bio__title">Engineer | Full-Stack Developer | Data Analyst </h2>

        <p className="bio__content">👋Hi, I'm Flavia!</p>
        <p className="bio__content">
          I'm a passionate Full Stack Developer committed to turning abstract
          concepts into elegant and fully functional web applications. My
          greatest satisfaction comes from the ability to convert code into
          practical products that have a positive impact on my community.
        </p>

        <p>That is how all started! My passion on </p>

        
      </article>
      </div>

      
    </section>
  );
};

export default Hero;
