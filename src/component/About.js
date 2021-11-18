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
            src="/images/my_pics.jpeg"
            alt="John"
            className="aside-img bio-aside-img"
          />
          <div className="aside-details bio-aside-details">
            <h3 className="aside-title bio-aside-details-title">Info</h3>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam
              doloribus assumenda illum beatae iusto debitis amet omnis, velit,
              aperiam perferendis at eveniet repudiandae accusamus magni
              laudantium corrupti incidunt nostrum autem voluptatem cumque aut
              repudiandae quibusdam, molestiae voluptates hic placeat, nobis
              quaerat perspiciatis nisi vitae doloremque qui inventore
              perferendis eaque.
            </p>
          </div>
        </aside>
      </article>
      <article className="info">
        <h2 className="info-title">Proficiency</h2>
        <article className="info-details">
          <aside className="aside scale">
            <div className="aside-details">
              <h3 className="aside-title">Java</h3>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Repellendus debitis rem reiciendis, atque consequatur delectus
                itaque exercitationem. Distinctio amet enim natus nam assumenda
                inventore porro? Consequatur, assumenda unde, maiores quo beatae
                aliquam, nesciunt iure illum veritatis earum eos amet eveniet?
              </p>
            </div>
          </aside>
          <aside className="aside scale">
            <div className="aside-details">
              <h3 className="aside-title">Front-End Web Developer</h3>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Repellendus debitis rem reiciendis, atque consequatur delectus
                itaque exercitationem. Distinctio amet enim natus nam assumenda
                inventore porro? Consequatur, assumenda unde, maiores quo beatae
                aliquam, nesciunt iure illum veritatis earum eos amet eveniet?
              </p>
            </div>
          </aside>
          <aside className="aside scale">
            <div className="aside-details">
              <h3 className="aside-title">Back-End Web Developer</h3>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Repellendus debitis rem reiciendis, atque consequatur delectus
                itaque exercitationem. Distinctio amet enim natus nam assumenda
                inventore porro? Consequatur, assumenda unde, maiores quo beatae
                aliquam, nesciunt iure illum veritatis earum eos amet eveniet?
              </p>
            </div>
          </aside>
        </article>
      </article>
    </section>
  );
};

export default About;
