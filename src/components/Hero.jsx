import logo from "../img/Logo.png";

export const Hero = () => {
  return (
    <div className="hero" id="home">
      <div className="hero__container">
        <img className="hero__logo animate__animated animate__fadeInLeft" src={logo} alt="Alejandro Vargas Logo. " />
        <div className="hero__text-container animate__animated animate__fadeInRight">
          <p className="hero__p1 p">Hi!</p>
          <h1 className="hero__h1">I'm Alejandro Vargas Hernández</h1>
          <p className="hero__p2 p">Frontend Web Developer.</p>
        </div>
      </div>
    </div>
  );
};
