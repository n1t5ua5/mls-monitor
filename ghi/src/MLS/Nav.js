import React from "react";
import { NavLink } from "react-router-dom";

export default function Nav() {
  return (
    <nav className="navbar navbar-expand-lg overlay">
      <div className="container-fluid flex-nowrap">
        <NavLink className={"navbar-brand"} to="/login">
          LOGIN
        </NavLink>
      </div>
    </nav>
  );
}
