import React from "react";
import About from "./About";
import Projects from "./Projects";
import Contact from "./Contact";

const Home = () => {
  return (
    <section id="home" className="home">
      <article className="home-main">
        <img src="/images/baby.png" alt="pics" className="home-main-img" />
        <h3 className="home-main-text">
          Hello, I am <span>John</span> and I am a Full Stack Web Developer
        </h3>
      </article>
      <article className="home-others">
        <About />
        <Projects />
        <Contact />
      </article>
    </section>
  );
};

export default Home;
