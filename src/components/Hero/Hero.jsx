import React from "react";
import "./Hero.css";
import meImg from "../../assets/images/2.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";

export default function Hero() {

  function jumpToSection(id) {
    document.querySelector(`#${id}`).scrollIntoView({ behavior: 'smooth' });
  }

  return (
    <div id="hero" className="container">
      <div className="hero-text">
        <h5>Hello, I'm</h5>
        <h1>Alan</h1>
        <h5>Frontend Developer</h5>
        <div className="hero-btns">
          <button className="btn btn-blue-inverted">Download CV</button>
          <button className="btn btn-blue" onClick={() => jumpToSection("contact")}>Contact Me</button>
        </div>
      </div>
      {/* <img src={meImg} alt="Alan looking at the camera." className="hero-img"/> */}

      <div className="social-icons">
        <a href="https://github.com/al-swe" target="_blank">
          <FontAwesomeIcon icon={faGithub} />
        </a>
        <a
          href="https://www.linkedin.com/in/alan-sweeney-84890624b/"
          target="_blank"
        >
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
        <a href="mailto:alanjunior.sweeney@gmail.com">
          <FontAwesomeIcon icon={faEnvelope} />
        </a>
      </div>
      <div className="inspiration">
        <a href="https://i.ytimg.com/vi/G-Cr00UYokU/maxresdefault.jpg" target="_blank">inspiration</a>
      </div>
    </div>
  );
}
