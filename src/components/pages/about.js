import React from "react";
import "./about.css";

function About() {
  return (
    <section className="page-section about-section" id="about">
      <div className="about-container">
        <h2 className="about-title">What we do</h2>
        <p className="about-text">
          There are hundreds of business development tools out there. Here, we aim to
          systematize at least the most popular tools according to their use in
          different areas of modern organizational life. We will gradually add
          more and more tools so that you can quickly find the tools used for
          analysing or designing one or another organizational aspect.
        </p>
      </div>
    </section>
  );
}

export default About;
