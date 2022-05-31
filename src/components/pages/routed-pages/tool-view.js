import React from "react";
import { Link } from "react-router-dom";
import "./tool-view.css";


function ToolView(props) {
  return (
    <div className="tool-view-container">
      <h3 className="tool-view-title"> {props.title} </h3>
      <p className="tool-view-text"> {props.description} </p>
      <li className="tool-link-item">
        <Link to={`/tools/${props.id}`} className="tool-link-readMore">
          Learn more
        </Link>
      </li>
    </div>
  );
}

export default ToolView;
