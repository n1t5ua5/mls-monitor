import { Link, NavLink, useNavigate, useLocation } from "react-router-dom";
import { useGetTokenQuery, useLogoutMutation } from "./app/apiSlice";
import React, { useEffect } from "react";
import "./styles/Nav.css";
import MMLogo2 from "./styles/MMlogo2.png";

const card_id = "Inter Miami CF";

const Nav = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { data: account, refetch } = useGetTokenQuery();
  const [logout, logoutResponse] = useLogoutMutation();

  const handleLogout = () => {
    logout();
    window.location.reload();
  };

  useEffect(() => {
    if (logoutResponse && logoutResponse.data) navigate("/");
  }, [logoutResponse, navigate]);

  useEffect(() => {
    refetch();
  }, [location, refetch]);

  return (
    <nav className="nav">
      <img
        src={MMLogo2}
        className="logo"
        alt="MLS Logo"
        width="99"
        height="99"
      />
      <div className="nav-content">
        <div className="nav-list" id="navbar">
          <ul className="nav-items">
            <li className="nav-item">
              <NavLink to={"/"} className={"nav-link"}>
                Home
              </NavLink>
            </li>
            {account ? null : (
              <li className="nav-item">
                <NavLink to={"/accounts"} className={"nav-link"}>
                  Create Account
                </NavLink>
              </li>
            )}
            {account && (
              <li className="nav-item">
                <NavLink to={"/favorites"} className={"nav-link"}>
                  Favorites
                </NavLink>
              </li>
            )}
            {account && (
              <li className="nav-item">
                <Link
                  to={`/teams/${card_id}`}
                  className="nav-link"
                  state={card_id}
                >
                  Team Detail
                </Link>
              </li>
            )}
            {account ? null : (
              <li className="nav-item">
                <NavLink to={"/login"} className={"nav-link"}>
                  Login
                </NavLink>
              </li>
            )}
          </ul>
        </div>
        {account && (
          <div className="nav-logout-container">
            <button className="nav-logout" onClick={handleLogout}>
              Logout
            </button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Nav;
