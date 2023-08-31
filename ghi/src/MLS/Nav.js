import { Link, NavLink } from "react-router-dom";
import { useGetTokenQuery, useLogoutMutation } from "mls/app/apiSlice";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const Nav = () => {
    const navigate = useNavigate();
    const { data: account } = useGetTokenQuery();
    const [logout, logoutResponse] = useLogoutMutation();

    useEffect(() => {
        if (logoutResponse && logoutResponse.data) navigate('/');
    }, [logoutResponse, navigate])

    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <Link to={'/'} className="navbar-brand">The MLS Monitor</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <NavLink to={'/'} className={'nav-link'}>Home</NavLink>
                        </li>
                        {account && <li className="nav-item">
                            <NavLink to={'/create-account'} className={'nav-link'}>Create Account</NavLink>
                        </li>}
                        {account && <li className="nav-item">
                            <NavLink to={'/team-detail'} className={'nav-link'}>Team Detail</NavLink>
                        </li>}
                        {account && <li className="nav-item">
                            <NavLink to={'/login'} className={'nav-link'}>Login</NavLink>
                        </li>}
                        {account && <li className="nav-item">
                            <NavLink to={'/logout'} className={'nav-link'}>Logout</NavLink>
                        </li>}
                    </ul>
                    {account && <button className="btn btn-outline-danger" onClick={logout}>
                        Logout
                    </button>}
                </div>
            </div>
        </nav>
    )
};

export default Nav;

import React from 'react';
import { NavLink, useNavigate } from "react-router-dom";
import { useAccountQuery, useLogout } from "../app/apiSlice";

export default function Nav() {
    const { data: account } = useAccountQuery();
    const navigate = useNavigate();
    const [logout] = useLogout();
    return (
        <nav className="navbar navbar-expand-lg overlay">
            <div className="container-fluid flex-nowrap">
            <NavLink className={"navbar-brand"} to="mls/home">
                HOME
            </NavLink>
            <NavLink className={"navbar-brand"} to="mls/create-account">
                CREATE ACCOUNT
            </NavLink>
            <NavLink className={"navbar-brand"} to="mls/team-detail">
                TEAM DETAIL
            </NavLink>
            <NavLink className={"navbar-brand"} to="mls/login">
                LOGIN
            </NavLink>
            <NavLink className={"navbar-brand"} to="mls/logout">
                LOGOUT
            </NavLink>
            {account && (
                <button
                className="btn btn-outline-danger logout"
                onClick={() => {
                    logout();
                    navigate("/");
                }}
                >
                LOGOUT
                </button>
            )}
            </div>
        </nav>
    );
}
