import React from "react";
import { NavLink } from "react-router-dom";
const Error = () => {
  return (
    <>
      <section id="error-page">
        <div className="content">
          <h2 className="header">404</h2>
          <h4 className="header">Sorry! Page Not Found</h4>
          <p>
            Oops! It seems like thepage you're triyingto access doesn't exist.
            If you believe this is an error, please contact us.
          </p>
          <div className="btns">
            <NavLink to="/">return Home</NavLink>
            <NavLink to="/contact">report problem</NavLink>
          </div>
        </div>
      </section>
    </>
  );
};

export default Error;
