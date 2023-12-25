import React from "react";
import TypedText from "../components/Typed";

const Home = () => {
  return (
    <>
      {/* <TypedText /> */}
      <main>
        <section className="section-hero">
          <div className="container grid grid-two-cols">
            <div className="hero-content">
              <p>We are the World Best IT Company </p>
              <h1>Welcome to the YadavjiEditing</h1>
              <p>
                Are you ready to take your buissness at the next level with
                cutting edge technologies? Look no further. At YadavjiEditing,
                we are the best IT Company.We specialize in IT Services and
                Solutions.
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

            {/* Hero images */}
            <div className="hero-image">
              <img
                src="/images/home.png"
                alt="coding together"
                width={"400"}
                height={"400"}
              />
            </div>
          </div>
        </section>
      </main>
      {/* 2nd section*/}
      <section className="section-analytics">
        <div className="container grid grid-four-cols">
          <div className="div1">
            <h2>50+</h2>
            <p>Registered Companies</p>
          </div>
          <div className="div1">
            <h2>10000+</h2>
            <p>Happy Clients</p>
          </div>
          <div className="div1">
            <h2>500+ </h2>
            <p>Well known Developers</p>
          </div>
          <div className="div1">
            <h2>24/7</h2>
            <p>Service</p>
          </div>
        </div>
      </section>
      {/* 3rd section*/}
      <section className="section-hero">
        <div className="container grid grid-two-cols">
          {/* Hero images */}
          <div className="hero-image">
            <img
              src="/images/design.png"
              alt="coding together"
              width={"400"}
              height={"400"}
            />
          </div>
          <div className="hero-content">
            <p>We are here to help you </p>
            <h1>Get Started Today</h1>
            <p>
              Ready to take the forst step towards a more efficient and secure
              IT Infrastrutures ? Contact us today for free consultation and
              let's discuss hot YadavjiEditing can help your buissness thrive in
              the digital age
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
        </div>
      </section>
    </>
  );
};

export default Home;
