import React, { useEffect } from "react";
import Typed from "typed.js";

const TypedText = () => {
  useEffect(() => {
    const options = {
      strings: [
        "Welcome to YadavjiEditing",
        "We are the World Best IT Company",
        "We specialize in IT Services and Solutions",
        "Connect with us now", 
        "Get in touch with us",
      ],
      typeSpeed: 50, // typing speed in milliseconds
      backSpeed: 30, // backspacing speed in milliseconds
      loop: true, // loop the animation
    };

    const typed = new Typed(".typed-text", options);

    return () => {
      // Clean up the Typed.js instance
      typed.destroy();
    };
  }, []); // Empty dependency array ensures that the effect runs only once

  return <span className="typed-text"></span>;
};

export default TypedText;
