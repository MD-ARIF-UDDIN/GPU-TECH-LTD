import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, Outlet } from "react-router-dom";
import auth from "../../firebase.init";
import useAdmin from "../../hooks/useAdmin";

const Dashboard = () => {
  const [user] = useAuthState(auth);
  const [admin] = useAdmin(user);
  return (
    <div className="drawer drawer-mobile ">
      <input id="dashboard-sidebar" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content ">
        <h1  className="font-bold text-primary  text-3xl">
          {admin ? "WELCOME TO ADMIN DASHBOARD" : "WELCOME TO DASHBOARD"}
        </h1>
        <Outlet></Outlet>
      </div>
      <div className="drawer-side">
        <label htmlFor="dashboard-sidebar" className="drawer-overlay"></label>
        <ul className="menu p-4 overflow-y-auto w-80 bg-primary mr-6 text-white font-semibold">
          <li>
            <Link to="/dashboard">My Profile</Link>
          </li>
          {!admin && (
            <li>
              <Link to="/dashboard/myorder">My Orders</Link>
            </li>
          )}
          {!admin && (
            <li>
              <Link to="/dashboard/addreview">Add Review</Link>
            </li>
          )}

          {admin && (
            <>
              <li>
                <Link to="/dashboard/users">All Users</Link>
              </li>
              <li>
                <Link to="/dashboard/addproduct">Add Product</Link>
              </li>
              <li>
                <Link to="/dashboard/manageproduct">Manage Product</Link>
              </li>
              <li>
                <Link to="/dashboard/manageorders">Manage Orders</Link>
              </li>
            </>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
