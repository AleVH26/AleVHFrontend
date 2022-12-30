import { Link as LinkS } from "react-scroll";
import { FaArrowAltCircleUp } from "react-icons/fa";

export const About = () => {
  return (
    <div className="about" id="about">
      <div className="title-container">
        <h2 className="title">ABOUT</h2>
        <LinkS to="home" smooth={true} duration={500} spy={true} exact="true">
          <FaArrowAltCircleUp className="home__button" />
        </LinkS>
      </div>
      <hr />
      <p className="about__information">
        I’m Alejandro Vargas Hernández, frontend web developer. I was born in
        the city of Cartago, located in the beautiful country of Costa Rica.
        Since I was a child I have been passionate about technology, always in
        contact with computers and software. I consider myself a mostly
        self-taught person, most of the things I love, I’ve learned on my own,
        looking for information and putting it into practice. Besides being
        passionate about coding, the other things I love are illustration, music
        and videogames.
      </p>
    </div>
  );
};
