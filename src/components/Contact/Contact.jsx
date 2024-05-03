import React, { useState } from "react";
import "./Contact.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";

export default function Contact() {
  return (
    <div id="contact">
      <div className="container">
        <div className="contact-left">
          <form id="form">
            <input type="text" placeholder="Your name" id="inputName" />
            <input type="email" placeholder="Your email" id="inputEmail" />
            <textarea
              placeholder="Your message"
              id="inputMsg"
              rows={5}
            ></textarea>
            <button type="submit" className="btn btn-blue">
              Send
            </button>
          </form>
        </div>
        <div className="contact-right">
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
      </div>
    </div>
  );
}
