import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { CSSTransition } from "react-transition-group";

import "./tools-overview.css";
import ToolView from "./tool-view";
import Menu from "../../ui-elems/menu";
import LoadingModal from "../../ui-elems/loading";
import FilterNavs from "./filter-navs";

function ToolsOverview() {
  const [tools, setTools] = useState([]);
  const [isLoading, setIsLoading] = useState(false)
  const [showTools, setShowTools] = useState(false);
  const [filterMenuShown, setFilterMenuShown] = useState(false);
  function toggleMenu() {
    setFilterMenuShown(!filterMenuShown);
  }

  const allTools = () => {
    if (tools.length > 0) {
      return tools.map((item) => {
        return (
          <ToolView
            key={item._id}
            title={item.title}
            description={item.shortDescription}
            scienceLink={item.scienceURL}
            id={item._id}
          />
        );
      });
    }
  };

  const filteredTools = (params) => {
    setShowTools(false);
    setIsLoading(true)
    const fetchTools = async () => {
      const response = await fetch(process.env.REACT_APP_BACKEND_URL + `/tools/${params}`);
      const responseData = await response.json();
      setShowTools(true);
      setIsLoading(false)
      return setTools([...responseData.data.tools]);
    };
    fetchTools();
  };

  const fetchTools = () => {
    setIsLoading(true)
    setShowTools(false);
    const fetchAllTools = async () => {
      const response = await fetch(process.env.REACT_APP_BACKEND_URL + "/tools");
      const responseData = await response.json();
      setShowTools(true);
      setIsLoading(false)
      return setTools([...responseData.data.tools]);
    };
    fetchAllTools();
  };

  useEffect(() => {
    fetchTools();
  }, []);

  return (
    <React.Fragment>
      <header className="header overview-header">
        <h2 className="logo" id="logo">
          Business<span>/</span>Dev
        </h2>
        <button onClick={toggleMenu} className="filter-menu-btn">
          Filters
        </button>
        <Menu shown={filterMenuShown} toggleShown={toggleMenu}>
          <div className="menu" onClick={toggleMenu}>
            <FilterNavs
              customClass={"inMenuFilters"}
              handleFilter={filteredTools}
              handleDisplayAll={fetchTools}
            />
          </div>
        </Menu>
        <FilterNavs
          customClass={"filter-navs"}
          handleFilter={filteredTools}
          handleDisplayAll={fetchTools}
        />
        <Link to="/" className="nav-link-back">
          <span>/</span> to main
        </Link>
      </header>
      <CSSTransition
        in={showTools}
        timeout={300}
        classNames="slide-in-top"
        mountOnEnter
        unmountOnExit
      >
        <section className="tools-overview">{allTools()}</section>
      </CSSTransition>
      {isLoading && <LoadingModal />}
    </React.Fragment>
  );
}
export default ToolsOverview;
