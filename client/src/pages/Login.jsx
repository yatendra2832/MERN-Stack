import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../store/auth";

const Login = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const { storeTokenInLS } = useAuth();
  // Handling input values
  const handleInputs = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setUser({ ...user, [name]: value });
  };

  // Hanlding form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(user);

    try {
      const response = await fetch("http://localhost:5000/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });

      const res_data = await response.json();

      if (response.ok) {
        storeTokenInLS(res_data.token);

        alert(`Login Successfully `);
        setUser({ email: "", password: "" });
        navigate("/");
      } else {
        alert(res_data.extraDetails ? res_data.extraDetails : res_data.message);
      }
      console.log(response);
    } catch (error) {
      console.log("Login Error:", error);
    }
  };

  return (
    <section>
      <main>
        <div className="section-login">
          <div className="container grid grid-two-cols">
            <div className="login-image">
              <img
                src="/images/login.png"
                alt="login img"
                width={"400"}
                height={"400"}
              />
            </div>

            {/* Login form */}
            <div className="login-form">
              <h1 className="main-heading mb-3">Login Form</h1>
              <br />

              <form onSubmit={handleSubmit}>
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
                  <label htmlFor="password">Password</label>
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
                  Login Now
                </button>
              </form>
            </div>
          </div>
        </div>
      </main>
    </section>
  );
};

export default Login;
