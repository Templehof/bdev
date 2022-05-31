import React from "react";
import "./contacts.css";

function Contacts() {
  return (
    <section className="page-section contact-section" id="contacts">
      <div className="contacts-container">
        <h3 className="contact-title">Contact us!</h3>
        <p className="contact-text">
          If you know of a useful business development tool that isn't yet
          featured on our website or have any other suggestions please, send us
          a message via the form below or write me on{" "}
          <a
            href="https://www.linkedin.com/in/ivan-riumkin-575995b9/"
            target="_blank"
            rel="noreferrer noopener"
          >
            LinkedIn
          </a>
        </p>
        <form
          className="contact-form"
          action="https://formsubmit.co/e08ed884664d81c393b0e4163fcf5896"
          method="POST"
        >
          <label htmlFor="email">Your email:</label>
          <input type="email" name="email" id="email" placeholder="example@hotmail.com" />
          <label htmlFor="message">Your message:</label>
          <textarea type="text" rows={4} id="message" name="message" />
          <button type="submit" className="contact-submit-btn">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contacts;
