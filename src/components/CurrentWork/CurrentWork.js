import React from "react";
import { motion as m } from "framer-motion";
import "./CurrentWork.scss";

const currentWork = [
  "Modernizing ERP systems",
  "Building mobile and web features",
  "Refactoring legacy architecture",
  "Improving internal workflows",
  "Partnering with product and QA",
];

const CurrentWork = () => {
  return (
    <m.section
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{
        delay: 2.2,
        duration: 0.5,
      }}
      className="current-work"
      id="current-work">
      <div className="current-work__card">
        <p className="current-work__eyebrow">Real-world product work</p>
        <h2 className="current-work__title">Current Focus</h2>
        <ul className="current-work__list">
          {currentWork.map((item, index) => (
            <li className="current-work__item" key={item}>
              <span className="current-work__marker">{index + 1}</span>
              {item}
            </li>
          ))}
        </ul>
      </div>
    </m.section>
  );
};

export default CurrentWork;
