import { Link, NavLink } from "react-router-dom";
import { useGetTokenQuery, useLogoutMutation } from "./app/apiSlice";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import "./styles/Nav.css";
import MMLogo2 from "./styles/MMlogo2.png";
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
    <nav className="nav">
      <Link to={"/"} className="nav-link">
        <img src={MMLogo2} alt="MLS Logo" width="80" height="80"></img>
      </Link>
      <div className="nav-container">
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
          {account && (
            <button className="nav-logout" onClick={logout}>
              Logout
            </button>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Nav;
