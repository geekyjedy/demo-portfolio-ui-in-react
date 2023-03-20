import React from "react";
import cabin from "./assets/img/portfolio/cabin.png";
import cake from "./assets/img/portfolio/cake.png";
import circus from "./assets/img/portfolio/circus.png";
import game from "./assets/img/portfolio/game.png";
import safe from "./assets/img/portfolio/safe.png";
import submarine from "./assets/img/portfolio/submarine.png";
import './css/styles.css';

const Portgrid = () => {
  return (
    <div className="col-md-6 col-lg-4 mb-5">
      <div
        className="portfolio-item mx-auto"
        data-bs-toggle="modal"
        data-bs-target="#portfolioModal1"
      >
        <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
          <div className="portfolio-item-caption-content text-center text-white">
            <i className="fas fa-plus fa-3x"></i>
          </div>
        </div>
        <div className="grid-items">
          <img className="grid-ele" src={cabin} alt="img here" />
          <img className="grid-ele" src={game} alt="img here" />
          <img className="grid-ele" src={cake} alt="img here" />
          <img className="grid-ele" src={submarine} alt="img here" />
          <img className="grid-ele"src={circus} alt="img here" />
          <img className="grid-ele" src={safe} alt="img here" />
        </div>
      </div>
    </div>
  );
};

export default Portgrid;
