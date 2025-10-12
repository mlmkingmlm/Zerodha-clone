import React from 'react'
import { NavLink } from 'react-router-dom'
const FRONTEND_URL = process.env.REACT_APP_FRONTEND_URL;

function Navbar() {
    function logout(){
        localStorage.clear();
        window.location.href = `${FRONTEND_URL}/login`;
    }
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-white position-fixed w-100 shadow-sm border-bottom">
                <div className="container-fluid">
                    {/* Left Side (Market Indices - Hide on small) */}
                    <div className="d-none d-lg-flex align-items-center gap-4">
                        <div className="d-flex align-items-center gap-2">
                            <span className="fw-semibold">NIFTY 50</span>
                            <span className="text-danger fw-bold">100.2</span>
                        </div>
                        <div className="d-flex align-items-center gap-2">
                            <span className="fw-semibold">SENSEX</span>
                            <span className="text-danger fw-bold">100.2</span>
                        </div>
                    </div>

                    {/* Logo (Always Visible, with separator only on large screens) */}
                    <div className="d-flex align-items-center mx-4">
                        {/* Separator only on desktop */}
                        <div
                            className="d-none d-lg-block"
                            style={{
                                width: "1px",
                                height: "30px",
                                backgroundColor: "#ddd",
                                marginRight: "20px",
                            }}
                        ></div>
                        <img
                            src="/kite-logo.svg"
                            alt="Logo"
                            height="58"
                        />
                    </div>

                    {/* Right Side Menu */}
                    <button
                        className="navbar-toggler ms-auto"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarContent"
                        aria-controls="navbarContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div
                        className="collapse navbar-collapse justify-content-end"
                        id="navbarContent"
                    >
                        <ul className="navbar-nav align-items-center gap-3">
                            <li className="nav-item">
                                <NavLink
                                    to="/"
                                    className={({ isActive }) => "nav-link " + (isActive ? "text-danger" : "")}
                                >
                                    Dashboard
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink
                                    to="/orders"
                                    className={({ isActive }) => "nav-link " + (isActive ? "text-danger" : "")}
                                >
                                    Orders
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink
                                    to="/holdings"
                                    className={({ isActive }) => "nav-link " + (isActive ? "text-danger" : "")}
                                >
                                    Holdings
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink
                                    to="/positions"
                                    className={({ isActive }) => "nav-link " + (isActive ? "text-danger" : "")}
                                >
                                    Positions
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink
                                    to="/funds"
                                    className={({ isActive }) => "nav-link " + (isActive ? "text-danger" : "")}
                                >
                                    Funds
                                </NavLink>
                            </li>
                            <li className='nav-item'>
                                <button className='btn btn-danger' onClick={()=>logout()}>Logout</button>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar
