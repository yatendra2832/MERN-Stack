import React, { useState } from "react";
import { useAuth } from "../store/auth";
import { toast } from "react-toastify";
const Register = () => {
  const [user, setUser] = useState({
    username: "",
    email: "",
    phone: "",
    password: "",
  });

  const { storeTokenInLS } = useAuth();

  // handling the input values
  const handleInputs = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setUser({ ...user, [name]: value });
  };

  //Handling the form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(user);
    try {
      const response = await fetch("https://yadavjiediting-webbackend.onrender.com/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });

      const res_data = await response.json();
      console.log("Response form server:", res_data);

      if (response.ok) {
        storeTokenInLS(res_data.token);
        toast.success("Registration Successful");
        setUser({ username: "", email: "", phone: "", password: "" });
      } else {
        toast.error(res_data.extraDetails ? res_data.extraDetails : res_data.message);
      }
    } catch (error) {
      console.log("Register Error:", error);
    }
  };
  return (
    <section>
      <main>
        <div className="section-registration">
          <div className="container grid grid-two-cols">
            <div className="registration-image">
              <img
                src="/images/register.png"
                alt="registration img"
                width={"400"}
                height={"400"}
              />
            </div>

            {/* registration form */}
            <div className="registration-form">
              <h1 className="main-heading mb-3">Registration Form</h1>
              <br />

              <form onSubmit={handleSubmit}>
                <div>
                  <label htmlFor="username">Username</label>
                  <input
                    type="text"
                    name="username"
                    id="username"
                    placeholder="Enter Username"
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
                  <label htmlFor="phone">phone</label>
                  <input
                    type="number"
                    name="phone"
                    id="phone"
                    placeholder="Enter phone"
                    required
                    autoComplete="off"
                    value={user.phone}
                    onChange={handleInputs}
                  />
                </div>
                <div>
                  <label htmlFor="password">password</label>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="Enter password"
                    required
                    autoComplete="off"
                    value={user.password}
                    onChange={handleInputs}
                  />
                </div>

                <br />
                <button type="submit" className="btn btn-submit">
                  Register Now
                </button>
              </form>
            </div>
          </div>
        </div>
      </main>
    </section>
  );
};

export default Register;
