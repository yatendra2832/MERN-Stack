import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import { FaUsers, FaHome, FaRegListAlt } from "react-icons/fa";
import { IoMdContact } from "react-icons/io";
const AdminLayout = () => {
  return (
    <>
      <header>
        <div className="container">
          <nav>
            <ul>
              <li>
                <NavLink to="/admin/users">
                  <FaUsers />
                  Users
                </NavLink>
              </li>
              <li>
                <NavLink to="/admin/contact">
                  <IoMdContact />
                  Contacts
                </NavLink>
              </li>
              <li>
                <NavLink to="/service">
                  <FaRegListAlt />
                  Service
                </NavLink>
              </li>
              <li>
                <NavLink to={"/"}>
                  <FaHome />
                  Home
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      <Outlet />
    </>
  );
};

export default AdminLayout;
