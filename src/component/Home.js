import React from "react";
import About from "./About";
import Project from "./Project";
import Contact from "./Contact";
import { useGlobalContext } from "../context";
import { Link } from "react-router-dom";

const Home = () => {
  const { projects } = useGlobalContext();
  const featuredProjects = projects.filter((project) => project.featured);

  return (
    <section id="home" className="home">
      <article className="home-main">
        <img src="/images/baby.png" alt="pics" className="home-main-img" />
        <h3 className="home-main-text">
          Hello, my name is <span>John</span> and I am a Full Stack Web
          Developer
        </h3>
      </article>
      <article className="home-others">
        {/* <About /> */}
        <section id="about" className="section about">
          <header className="section-header">
            <h1>About Me</h1>
            <div className="line"></div>
          </header>

          <article className="info bio">
            <h2 className="info-title bio-title">Bio</h2>
            <aside className="aside bio-aside scale">
              <img
                src="/images/my_pics.jpg"
                alt="John"
                className="aside-img bio-aside-img"
              />
              <div className="aside-details bio-aside-details">
                <h3 className="aside-title bio-aside-details-title">Info</h3>
                <p>
                  My name is John Toriola, am a self-taught programmer from
                  Nigeria. I presently reside in Lagos, Nigeria. I've been
                  learning programming for over two years. Am competent in
                  Object Oriented Programming(OOP) and functional programming.
                  Started my foray into programming with Java and from there
                  ventured into Web Programming with in-depth understanding of
                  HTML, CSS, Javascript, React and NodeJs. Am a regular on
                  HackerEarth, and have completed a lot of challenges with
                  varying difficulty levels. Am a fast learner and have very
                  solid knowledge of algorithms and Data Structures.
                </p>
              </div>
            </aside>
          </article>
        </section>
        <section id="projects" className="section projects">
          <header className="section-header">
            <h1>Projects</h1>
            <div className="line"></div>
          </header>
          <section className="projects-list">
            {featuredProjects.map((project) => {
              return <Project key={project.id} project={project} />;
            })}
          </section>
          <button className="btn">
            <Link className="btn-link" to="/projects">
              All Projects
            </Link>
          </button>
        </section>
        <Contact />
      </article>
    </section>
  );
};

export default Home;
