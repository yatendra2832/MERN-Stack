import React, { useState } from "react";
import { useAuth } from "../store/auth";
import { toast } from "react-toastify";
const defaultContactForm = {
  username: "",
  email: "",
  message: "",
};
const Contact = () => {
  const [contact, setContact] = useState(defaultContactForm);

  const [userData, setUserData] = useState(true);
  const { user } = useAuth();

  if (userData && user) {
    setContact({ ...contact, username: user.username, email: user.email });

    setUserData(false);
  }
  const handleInputs = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setContact({ ...contact, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log(contact);

    try {
      const response = await fetch("https://yadavjiediting-webbackend.onrender.com/api/form/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(contact),
      });
      if (response.ok) {
        setContact(defaultContactForm);
        toast.success("Message sent successfully");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <section>
      <main>
        <div className="section-contact">
          <div className="container grid grid-two-cols">
            <div className="contact-image">
              <img
                src="/images/support.png"
                alt="contact image"
                width={"400"}
                height={"400"}
              />
            </div>
            {/* contact form */}
            <div className="contact-form">
              <h1 className="main-heading mb-3">Contact Us</h1>
              <br />
              <form onSubmit={handleSubmit}>
                <div>
                  <label htmlFor="username">Username</label>
                  <input
                    type="text"
                    name="username"
                    id="username"
                    placeholder="Enter your name"
                    required
                    autoComplete="off"
                    value={contact.username}
                    onChange={handleInputs}
                  />
                </div>
                <div>
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Enter email"
                    required
                    autoComplete="off"
                    value={contact.email}
                    onChange={handleInputs}
                  />
                </div>
                <div>
                  <label htmlFor="Message">Message</label>
                  <input
                    type="textarea"
                    name="message"
                    id="message"
                    placeholder="Type your message..."
                    required
                    autoComplete="off"
                    value={contact.message}
                    onChange={handleInputs}
                  />
                </div>
                <br />
                <button type="submit" className="btn btn-submit">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
        {/* contact section end */}
      </main>
      <div className="section-map">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14000.083743187191!2d77.48301869800453!3d28.689020333755025!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cf230c51204b1%3A0xd053494ad5b99485!2sGovindpuram%2C%20Ghaziabad%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1703498359861!5m2!1sen!2sin"
          width="100%"
          height="450"
          // style={"border:0"}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </section>
  );
};

export default Contact;
