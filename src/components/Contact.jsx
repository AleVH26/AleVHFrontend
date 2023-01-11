import { FaLinkedin, FaGithubSquare, FaArrowAltCircleUp } from "react-icons/fa";
import { Link as LinkS } from "react-scroll";

export const Contact = () => {
  return (
    <div className="contact" id="contact">
      <div className="title-container">
        <h2 className="title">CONTACT</h2>
        <LinkS to="home" smooth={true} duration={500} spy={true} exact="true">
          <FaArrowAltCircleUp className="home__button" />
        </LinkS>
      </div>
      <hr className="contact__hr" />
      <div className="contact__icons-container">
        <a
          className="contact__icon"
          href="https://www.linkedin.com/in/alevhdev/"
          target="_blank"
        >
          <FaLinkedin />
        </a>
        <a
          className="contact__icon"
          href="https://github.com/AleVH26"
          target="_blank"
        >
          <FaGithubSquare />
        </a>
      </div>
      <form
        className="contact__form"
        action="https://formspree.io/f/xoqzqajo"
        method="POST"
      >
        <div className="contact__form-input-container">
          <label id="name">Name</label>
          <input type="text" id="name" />
        </div>
        <div className="contact__form-input-container">
          <label id="email">Email</label>
          <input type="email" id="email" name="email"/>
        </div>
        <div className="contact__form-input-container">
          <label id="message">Message</label>
          <textarea id="message" name="message"></textarea>
        </div>
        <button type="submit" className="contact__form-button">Send</button>
      </form>
      <p className="rights">All rights reserved. Alejandro Vargas. ©</p>
    </div>
  );
};
