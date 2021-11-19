import React from "react";

const About = () => {
  return (
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
              My name is John Toriola, I am a self-taught programmer from
              Nigeria. I presently reside in Lagos, Nigeria. I have been
              learning programming for over two years. I am competent in Object
              Oriented Programming(OOP) and functional programming. I began my
              foray into programming with Java and from there I ventured into
              Web Programming with in-depth understanding of HTML, CSS,
              Javascript, React and NodeJs. I am a regular on HackerEarth, and I
              have completed a lot of challenges with varying difficulty levels.
              I am a fast learner and I have very solid knowledge of algorithms
              and Data Structures.
            </p>
          </div>
        </aside>
      </article>
      <article className="info">
        <h2 className="info-title">Proficiency</h2>
        <article className="info-details">
          <aside className="aside scale">
            <div className="aside-details">
              <h3 className="aside-title">Java Programmer</h3>
              <p>
                I have completed two Java specializations on Coursera. One is
                "Java Programming And Software Engineering Fundamentals" by Duke
                University and the other is "Object Oriented Java Programming -
                Data Structure And Beyond" by UCSD. By reason of the courses, I
                know how to use Data Structures such LinkedList, ArrayList,
                Binary Search Trees(BST) and Graphs. And I can perform the
                asymptotic analysis of an algorithm. I have also built some
                Android games using Java.
              </p>
            </div>
          </aside>
          <aside className="aside scale">
            <div className="aside-details">
              <h3 className="aside-title">Front-End Web Developer</h3>
              <p>
                As a front-end web developer, I can design web sites and apps
                using HTML, CSS, Javascript and React. Apart from the
                afforementioned tools, I can also build websites using bootstrap
                and Sass. I completed two specializations on Coursera in other
                to become a better web developer. The first is "Web Design for
                Everybody" by University of Michigan and the second is
                "Javascript for Beginners" by UCDavis.
              </p>
            </div>
          </aside>
          <aside className="aside scale">
            <div className="aside-details">
              <h3 className="aside-title">Back-End Web Developer</h3>
              <p>
                I have completed two specializations on Cousera to solidify my
                skill as a back-end web developer. The first is "Web Application
                For Everybody" by the University of Michigan and the second is
                "Full Stack Web Development With React" by Hong Kong University
                of Science and Technology. From the two courses I was able to
                learn how to use PHP and NodeJs to build a secure backend
                application and REST Apis. Some fullstack websites I built are
                in the Projects section.
              </p>
            </div>
          </aside>
        </article>
      </article>
    </section>
  );
};

export default About;
