import React from "react";
import { CSSTransition } from "react-transition-group";
import "./menu.css"

function Menu(props) {
    return (
      <CSSTransition
        in={props.shown}
        timeout={200}
        classNames='slide-in-top'
        mountOnEnter
        unmountOnExit
      >
        {props.children}
      </CSSTransition>
    );
  }
  
  export default Menu;