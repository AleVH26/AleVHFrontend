import { Link as LinkS } from "react-scroll";
import logo from "../img/Logo.png";

export const Navbar = () => {
  return (
    <>
      <nav className="navbar">
        <div className="navbar__links">
          <LinkS
            className="navbar__link"
            to="about"
            smooth={true}
            duration={500}
            spy={true}
            offset={-50}
            exact="true"
          >
            About
          </LinkS>
          <LinkS
            className="navbar__link"
            to="projects"
            smooth={true}
            duration={500}
            offset={-50}
            spy={true}
            exact="true"
          >
            Projects
          </LinkS>
          <LinkS
            className="navbar__link"
            to="contact"
            smooth={true}
            duration={500}
            offset={-50}
            spy={true}
            exact="true"
          >
            Contact
          </LinkS>
        </div>
      </nav>
    </>
  );
};
