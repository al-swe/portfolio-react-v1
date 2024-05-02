import React from "react";
import "./About.css";

export default function About() {
  return (
    <div id="about" className="container">
      <div className="about-left">
        <h1>About.</h1>
        <div>
          <p>
          A passionate web designer and front-end developer with a strong desire
          to explore the ever-evolving world of web development.
        </p>
        <p>
          What captivates me about design and development is the limitless
          potential for continuous learning and the constant innovation that
          drives it forward.
        </p>
        <p>
          When designing, I use Figma and Photoshop, bringing designs to life
          with HTML, CSS (Bootstrap at times) and JavaScript. I am currently
          trying to wrap my head around React.
        </p>
        </div>        
      </div>
      <div className="about-right">
        <div className="about-lists">
          <h1>Tech.</h1>
          <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>Bootstrap</li>
          </ul>
          <ul>
            <li>JavaScript</li>
            <li>React</li>
            <li>C#</li>
          </ul>

          <ul>
            <li>Figma</li>
            <li>Photoshop</li>
            <li>Cinema 4D</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
