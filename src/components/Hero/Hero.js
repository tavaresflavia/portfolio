import React from "react";
import { motion as m } from "framer-motion";
import "./Hero.scss";
import linkedinIcon from "../../assets/icons/linkedin.png";
import githubIcon from "../../assets/icons/github.png";
import resumeIcon from "../../assets/icons/resume.png";

const Hero = () => {
  return (
    <section className="hero" id="home">
      <h1 className="hero__title">
        <m.span
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
        </m.span>
        <m.span
          animate={{ rotate: 90 }}
          transition={{
            duration: 1,
            type: "spring",
            stiffness: 80,
            damping: 30,
          }}
          className="hero__title-mid">
          {"</>"}
        </m.span>
        <m.span
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
        </m.span>
      </h1>
      <p className="hero__subtitle">web developer</p>


      <div className="hero__profile-container">
        <m.img
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            delay: 1.8,
            duration: 0.5,
          }}
          className="hero__img"
          src="./images/profile.png"
          alt="profile"></m.img>
        <m.article
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            delay: 2.2,
            duration: 0.5,
          }}
          className="bio">
          <div className="bio__title-wrap">
            <h2 className="bio__title">
              Engineer | Full-Stack Developer | Data Analyst
            </h2>
            <div className="bio__icons">
              <a href="https://github.com/tavaresflavia">
                <img
                  src={githubIcon}
                  alt="github icon"
                  className="bio__icon"></img>
              </a>
              <a href="https://www.linkedin.com/in/tavaresflavia/">
                <img
                  src={linkedinIcon}
                  alt="linkedin icon"
                  className="bio__icon"></img>
              </a>
              <a href="https://drive.google.com/file/d/1L51VR3Ru_AULAVnAMTBj75Q2T2MLaLzg/view?usp=sharing" ><img className="bio__icon bio__icon--resume" src={resumeIcon} alt="resume icon"></img> </a>
            </div>
          </div>
          <p className="bio__content">👋 Hi, I'm Flavia!</p>
          <p className="bio__content">
            I'm a passionate Full Stack Developer committed to turning abstract
            concepts into fully functional web applications. My greatest
            satisfaction comes from the ability to convert code into practical
            products that have a positive impact on my community. That's how it
            all began!
          </p>
          <p className="bio__content">
            My journey into the world of coding initially kicked off through my
            work in the manufacturing industry. I began by focusing on
            automation projects that enhanced processes across various
            departments. The desire to facilitate and empower my team members in
            their roles served as my primary motivation for embarking on a
            self-driven adventure to learn coding. As I immersed myself in this
            field, I realized the transformative power of coding.{" "}
          </p>
          <p className="bio__content">
            As a 2023 graduate of BrainStation’s full-stack web development
            diploma program, I strengthened my skills in HTML, CSS, SASS,
            Javascript, React, Express and MySQL in a challenging bootcamp
            timeframe. Embracing the role of Teaching Assistant, guiding
            students and elucidating complex concepts was incredibly gratifying.
            This experience not only energized me but also earned me 100%
            positive feedback. Now, fueled by this rewarding experience, I am
            eager to embark on a career as a Junior Developer, applying my
            skills and continuing to grow in a professional setting.
          </p>
          <p className="bio__content">
            Feel free to contact me at
            <a className="bio__email" href="mailto:altavares.flavia@gmail.com">
              altavares.flavia@gmail.com
            </a>
            .
          </p>
        </m.article>
      </div>
    </section>
  );
};

export default Hero;
