import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useAuth } from "../store/auth";
import { toast } from "react-toastify";
const AdminUpdateUser = () => {
  const params = useParams();
  const { authorizationToken } = useAuth();
  const URL ='https://yadavjiediting-webbackend.onrender.com'

  const [data, setData] = useState({
    username: "",
    email: "",
    phone: "",
  });
  // get single user data
  const getSingleUserData = async () => {
    try {
      const response = await fetch(
        `${URL}/api/admin/users/${params.id}`,
        {
          method: "GET",
          headers: {
            Authorization: authorizationToken,
          },
        }
      );

      const data = await response.json();
      console.log(`Users data: ${data}`);
      setData(data);
      // if (response.ok) {
      //   getAllUsersData();
      // }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getSingleUserData();
  }, []);

  const handleInputs = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setData({ ...data, [name]: value });
  };

  // to update the data dynamically

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        `${URL}/api/admin/users/update/${params.id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            Authorization: authorizationToken,
          },
          body: JSON.stringify(data),
        }
      );
      if (response.ok) {
        toast.success("User updated successfully");
      } else {
        toast.error("Something went wrong");
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="container grid grid-two-cols">
      <div className="update-form">
        <h1 className="main-heading mb-3">Update User</h1>
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
              value={data.username}
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
              value={data.email}
              onChange={handleInputs}
            />
          </div>
          <div>
            <label htmlFor="phone">Phone</label>
            <input
              type="phone"
              name="phone"
              id="phone"
              placeholder="Enter phone"
              required
              autoComplete="off"
              value={data.phone}
              onChange={handleInputs}
            />
          </div>
          <br />
          <button type="submit" className="btn btn-submit">
            Update
          </button>
        </form>
      </div>
      <div className="contact-image">
        <img
          src="/images/support.png"
          alt="contact image"
          width={"400"}
          height={"400"}
        />
      </div>
    </div>
  );
};

export default AdminUpdateUser;
