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
                    </ul>
                    {account && <button className="btn btn-outline-danger" onClick={logout}>
                        Logout
                    </button>}
                </div>
            </div>
        </nav>
    )
};
