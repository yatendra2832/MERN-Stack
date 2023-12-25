import React, { useState } from "react";

const Contact = () => {
  const [user, setUser] = useState({
    username: "",
    email: "",
    message: "",
  });

  const handleInputs = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(user);
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
                    value={user.username}
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
                    value={user.email}
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
                    value={user.message}
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
      </main>
    </section>
  );
};

export default Contact;
