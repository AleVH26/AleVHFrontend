import { FaHtml5, FaCss3Alt, FaJsSquare, FaReact } from "react-icons/fa";

export const Project = ({ url, name, img }) => {
  return (
    <div className="project">
      <div className="project__img-container">
        <a target="_blank" href={url}>
          <img className="project__img" src={img} alt={name} />
        </a>
      </div>

      <div className="project__description">
        <div className="project__icons-container">
          <FaHtml5 />
          <FaCss3Alt />
          <FaJsSquare />
          <FaReact />
        </div>
        <hr />
        <p className="project__name">{name}</p>
      </div>
    </div>
  );
};
