import { Link, NavLink } from "react-router-dom";
import { useGetTokenQuery, useLogoutMutation } from "./app/apiSlice";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import "./styles/Nav.css";
import MMLogo2 from './styles/MMlogo2.png';
import { useGetTeamByNameQuery } from "./app/apiSlice";
const card_id = "Philadelphia Union";
const Nav = () => {
  const navigate = useNavigate();
  const { data: account } = useGetTokenQuery();
  const [logout, logoutResponse] = useLogoutMutation();

   const handleLogout = () => {
     logout();
     window.location.reload();
   };

  useEffect(() => {
    if (logoutResponse && logoutResponse.data) navigate("/");
  }, [logoutResponse, navigate]);
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <Link to={"/"} className="navbar-brand">
          The MLS Monitor
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink to={"/"} className={"nav-link"}>
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to={"/accounts"} className={"nav-link"}>
                Create Account
              </NavLink>
            </li>
            {account ? null : (
              <li className="nav-item">
                <NavLink to={"/login"} className={"nav-link"}>
                  Login
                </NavLink>
              </li>
            )}
          </ul>
          {account && (
            <button className="btn btn-outline-danger" onClick={handleLogout}>
              Logout
            </button>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Nav;
