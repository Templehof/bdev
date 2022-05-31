import React, { useState, useEffect } from "react";
import Fields from "./fields-slider";
import { CSSTransition } from "react-transition-group";

import "./intro.css";

function Intro() {
  const [isTitleShown, setIsTitleShown] = useState(false);

  useEffect(() => {
    setIsTitleShown(true);
  }, []);
  return (
    <section className="page-section intro-section" id="intro">
      <div className="intro-container">
        <CSSTransition
          in={isTitleShown}
          timeout={1000}
          classNames="intro-title"
        >
          <h1 className="intro-title">
            Welcome to the ultimate <span>business development</span> hub!
          </h1>
        </CSSTransition>
        <p className="intro-text">
          {" "}
          Whether you are a business professional or a student, here you can
          find a carefully curated collection of business development tools to
          serve the needs of your project or organization.
        </p>
        <p className="intro-text">
          Our goal is to systematize a variety of business development tools and
          feature them here in order for you to be able to quickly find what you
          need!
        </p>
        <h1 className="intro-title">Explore our categories</h1>
        <Fields />
      </div>
    </section>
  );
}
export default Intro;
