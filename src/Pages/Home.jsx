import { About } from "../components/About";
import { Contact } from "../components/Contact";
import { Hero } from "../components/Hero";
import { Navbar } from "../components/Navbar";
import { Projects } from "../components/Projects";

export const Home = () => {
  return (
    <>
      <Hero />
      <Navbar />
      <About />
      <Projects />
      <Contact />
    </>
  );
};
