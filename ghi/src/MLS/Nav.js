import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
// import { useAccountQuery, useLogout } from "../app/apiSlice";

export default function Nav() {
  // const { data: account } = useAccountQuery();
  // const navigate = useNavigate();
  // const [logout] = useLogout();
  return (
    <nav className="navbar navbar-expand-lg overlay">
      <div className="container-fluid flex-nowrap">
        {/* <NavLink className={"navbar-brand"} to="mls/home">
          HOME
        </NavLink> */}
        <NavLink className={"navbar-brand"} to="mls/create-account">
          CREATE ACCOUNT
        </NavLink>
        {/* <NavLink className={"navbar-brand"} to="mls/team-detail">
          TEAM DETAIL
        </NavLink>
        <NavLink className={"navbar-brand"} to="mls/login">
          LOGIN
        </NavLink>
        <NavLink className={"navbar-brand"} to="mls/logout">
          LOGOUT */}
        {/* </NavLink> */}
        {/* {account && (
          <button
            className="btn btn-outline-danger logout"
            onClick={() => {
              logout();
              navigate("/");
            }}
          >
            LOGOUT
          </button>
        )} */}
      </div>
    </nav>
  );
}
