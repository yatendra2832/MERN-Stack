import React from "react";

const Service = () => {
  return (
    <>
      {/* Service Section */}
      <section>
        <div className="container grid grid-three-cols">
          <div className="box1">
            <div className="hero-image">
              <img
                src="/images/services.png"
                alt="digital marketing"
                width={"300"}
                height={"300"}
                className="services-img"
              />
            </div>
            <h2 className="service-header">Web Development</h2>
            <p className="service-para">
              We offer professional web development services tailored to your
              business needs. Our team of experts will build responsive and
              user-friendly websites.
            </p>
          </div>

          <div className="box1">
            <div className="hero-image">
              <img
                src="/images/seo.png"
                alt="graphic design"
                width={"300"}
                height={"300"}
                className="services-img"
              />
            </div>
            <h2 className="service-header">Graphic Design</h2>
            <p className="service-para">
              Need eye-catching visuals for your brand? Our graphic design
              services cover everything from logos and branding to marketing
              materials.
            </p>
          </div>

          <div className="box1">
            <div className="hero-image">
              <img
                src="/images/network.png"
                alt="digital marketing"
                width={"300"}
                height={"300"}
                className="services-img"
              />
            </div>
            <h2 className="service-header">Digital Marketing</h2>
            <p className="service-para">
              Enhance your online presence with our digital marketing solutions.
              From social media management to SEO, we've got you covered.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Service;
