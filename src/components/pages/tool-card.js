import React from "react";
import "./tool-card.css";
import Strategy from "../../images/Strategy.svg";
import Marketing from "../../images/Marketing.svg";
import Social from "../../images/Social.svg";
import Sustainability from "../../images/Sustainability.svg";

function ToolCard(props) {
  const src =
    props.title === "Strategy"
      ? Strategy
      : props.title === "Marketing"
      ? Marketing
      : props.title === "Social"
      ? Social
      : props.title === "Sustainability"
      ? Sustainability
      : "";

  return (
    <div className="tool-card-container">
      <h3 className="tool-card-title">{props.title}</h3>
      <p className="tool-card-description">{props.description}</p>
      <img className="tool-card-logo" src={src} alt={`${props.title}`} />
    </div>
  );
}
export default ToolCard;
