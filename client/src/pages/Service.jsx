import React from "react";
import { useAuth } from "../store/auth";
const Service = () => {
  const { services } = useAuth();
  return (
    <>
      {/* Service Section */}
      <section>
        <div className="container">
          <h1 className="main-heading">Our Services</h1>
        </div>
        <div className="container grid grid-three-cols">
          {services.map((curElem, Index) => {
            const { price, description, provider, service } = curElem;
            return (
              <div className="box1" key={Index}>
                <div className="hero-image">
                  <img
                    src="/images/services.png"
                    alt="digital marketing"
                    width={"300"}
                    height={"300"}
                    className="services-img"
                  />
                </div>
                <div className="card-details">
                  <div className="grid grid-two-cols">
                    <p className="service-para">{provider}</p>
                    <p className="service-para">{price}</p>
                  </div>
                  <h2 className="service-header">{service}</h2>
                  <p className="service-para">{description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default Service;
