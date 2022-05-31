import React from "react";

function FilterNavs (props) {
    return(
        <div className={`${props.customClass}`}>
        <button
            onClick={() => {
              props.handleDisplayAll();
            }}
            className="filter-btn"
          >
            All
          </button>
          <button
            onClick={() => {
              props.handleFilter("strategy");
            }}
            className="filter-btn"
          >
            Strategy
          </button>
          <button
            onClick={() => {
              props.handleFilter("marketing");
            }}
            className="filter-btn"
          >
            Marketing
          </button>
          <button
            onClick={() => {
              props.handleFilter("sustainability");
            }}
            className="filter-btn"
          >
            Sustainability
          </button>
          <button
            onClick={() => {
              props.handleFilter("social");
            }}
            className="filter-btn"
          >
            Social
          </button>
        </div>
    )
}
export default FilterNavs;