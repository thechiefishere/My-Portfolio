import React from "react";

const Contact = () => {
  return (
    <section id="contact" className="section contact">
      <header className="section-header">
        <h1>Contact</h1>
        <div className="line"></div>
      </header>
      <article className="contact-groups">
        <article className="contact-group scale">
          <h4>Email</h4>
          <p>john.toriola.tj@gmail.com</p>
        </article>
        <article className="contact-group scale">
          <h4>Phone</h4>
          <p> (+234) 8129187637</p>
          <p> (+234) 9055076399</p>
        </article>
        <article className="contact-group scale">
          <h4>Address</h4>
          <p>40, Mogaji Street, Ijeshatedo Surulere, Lagos.</p>
        </article>
      </article>
    </section>
  );
};

export default Contact;
