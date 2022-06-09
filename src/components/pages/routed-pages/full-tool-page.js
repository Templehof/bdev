import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import "./full-tool-page.css";

function ToolPage() {
  const [content, setContent] = useState();

  const { tid } = useParams();

  useEffect(() => {
    async function fetchContent() {
      const response = await fetch(
        process.env.REACT_APP_BACKEND_URL + `/tools/id/${tid}`
      );
      const data = await response.json();
      return setContent(data.data.tool[0]);
    }
    fetchContent();
  }, [tid]);

  return (
    <section className="page-section full-tool-page">
      <header className="header overview-header">
        <h2 className="logo" id="logo">
          Business<span>/</span>Dev
        </h2>
        <Link to="/tools" className="nav-link-back">
          <span>/</span> to overview
        </Link>
      </header>
      {content && (
        <div className="full-tool-content">
          <h1 className="full-title">{content.title}</h1>
          <div className="image-container">
            <img
              src={
                content.toolImage
                  ? content.toolImage
                  : "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1115&q=80"
              }
              alt="tool"
              className="full-image"
            />
          </div>
          <p className="full-description">
            {content.longDescription
              ? content.longDescription
              : content.shortDescription}
          </p>
          <ul className="sources">
            {content.scienceURL.map((item) => {
              return (
                <li key={content.scienceURL.indexOf(item)}>
                  <a
                    className="source-link-full"
                    href={item.url}
                    target={"_blank"}
                    rel="noreferrer"
                  >
                    {item.title}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </section>
  );
}

export default ToolPage;
