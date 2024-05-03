import React from "react";
import "./Projects.css";
import projects from "./projectsData.json";

export default function Projects() {
  function openLink(website) {
    window.open(website);
  }

  return (
    <div id="projects" className="container">
      <div className="card-grid">
        {projects.map((project) => (
          <div className="card" key={project.title}>
            <img src={project.imgUrl} alt="" />
            <div className="card-text">
              <h3>{project.title}</h3>
              <p>{project.tech}</p>
            </div>
            <div className="card-btns">
              <button
                onClick={() => openLink(project.link1)}
                className="btn btn-blue-inverted"
              >
                GitHub
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
