import { Project } from "./Project";
import { Link as LinkS } from "react-scroll";
import { FaArrowAltCircleUp } from "react-icons/fa";
import takeyourcharacter from "../img/takeyourcharacter.png";
import takeyourgif from "../img/takeyourgif.png";

export const Projects = () => {
  return (
    <div className="projects" id="projects">
      <div className="title-container">
        <h2 className=" title">PROJECTS</h2>
        <LinkS to="home" smooth={true} duration={500} spy={true} exact="true">
          <FaArrowAltCircleUp className="home__button" />
        </LinkS>
      </div>
      <hr></hr>

      <div className="projects__container">
        <Project
          url={"https://takeyourcharacter.netlify.app"}
          img={takeyourcharacter}
          name={"Rick and Morty API"}
        />
        <Project
          url={"https://takeyourgif.netlify.app"}
          img={takeyourgif}
          name={"Giphy API"}
        />
      </div>
    </div>
  );
};
