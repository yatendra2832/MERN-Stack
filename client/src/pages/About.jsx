import React from "react";

const About = () => {
  return (
    <>
      <section className="section-hero">
        <div className="container grid grid-two-cols">
          <div className="hero-content">
            <p>Welcome , Yatendra Singh</p>
            <h1>Why Choose YadavjiEditing ?</h1>
            <p>
              Expertise: Our team consist of experienced IT professionals who
              are passionate about staying up-to-date with the latest industry
              trends.
            </p>

            <p>
              Customer Focus: We are committed to delivering exceptional
              customer service and support.
            </p>
            <p>
              Quality: We are committed to delivering high-quality work that
              meets our clients' needs.
            </p>
            <p>
              Customer Satisfaction: We are committed to delivering exceptional
              customer service and support.
            </p>
            <div className="btn btn-group">
              <a href="/contact">
                <button className="btn">Connect Now</button>
              </a>
              <a href="/service">
                <button className="btn secondary-button">Learn More</button>
              </a>
            </div>
          </div>

          <div className="hero-image">
            <img
              src="/images/about.png"
              alt="about image"
              width={"400"}
              height={"400"}
            />
          </div>
        </div>
      </section>

      {/* 2nd section*/}
      <section className="section-analytics">
        <div className="container grid grid-four-cols">
          <div className="div1">
            <h2>50+</h2>
            <p>Companies Registered</p>
          </div>
          <div className="div1">
            <h2>150+</h2>
            <p>Project Done</p>
          </div>
          <div className="div1">
            <h2>250+ </h2>
            <p>Happy Clients</p>
          </div>
          <div className="div1">
            <h2>650K+</h2>
            <p>Youtube Subscribers</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
