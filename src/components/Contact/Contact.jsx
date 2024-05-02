import React, { useState } from "react";
import "./Contact.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    document.getElementById(id).classList.remove("error");
    if (id === "inputName") {
      setName(value);
    } else if (id === "inputEmail") {
      setEmail(value);
    } else if (id === "inputMsg") {
      setMessage(value);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let isError = false;

    if (name.trim() === "") {
      document.getElementById("inputName").classList.add("error");
      isError = true;
    }
    if (email.trim() === "") {
      document.getElementById("inputEmail").classList.add("error");
      isError = true;
    }
    if (message.trim() === "") {
      document.getElementById("inputMsg").classList.add("error");
      isError = true;
    }

    // If no error, log "Send!"
    if (!isError) {
      document.getElementById("form").classList.add("hide");
      document.getElementById("success").classList.add("show");
    }
  };

  return (
    <div id="contact">
      <div className="container">
        <div className="contact-left">
          <form id="form" onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Your name"
              value={name}
              onChange={handleInputChange}
              id="inputName"
            />
            <input
              type="email"
              placeholder="Your email"
              value={email}
              onChange={handleInputChange}
              id="inputEmail"
            />
            <textarea
              placeholder="Your message"
              value={message}
              onChange={handleInputChange}
              id="inputMsg"
              rows={5}
            ></textarea>
            <button type="submit" className="btn btn-blue">
              Send
            </button>
          </form>
          <h4 id="success" className="success hide">
            Thank you for your message! :)
          </h4>
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
