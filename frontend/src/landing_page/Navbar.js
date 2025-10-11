import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
    return (
        <>
            <nav className="navbar navbar-expand-lg border-bottom p-3 position-fixed z-2 w-100" style={{ backgroundColor: "white" }}>
                <div className="container-fluid px-5">
                    <div className="row">
                        <div className="col-6">
                            <Link className="navbar-brand" to="/">
                                <img src="/media/images/logo.svg" alt="logo" className='w-50' />
                            </Link>
                        </div>
                        <div className="col-6 align-items-end text-end">
                            <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon" />
                    </button>
                        </div>
                    </div>
                    
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item ms-3">
                                <Link className="nav-link" aria-current="page" to="/signup">
                                    Signup
                                </Link>
                            </li>
                            <li className="nav-item ms-3">
                                <Link className="nav-link" to="/about">
                                    About
                                </Link>
                            </li>
                            <li className="nav-item ms-3">
                                <Link className="nav-link" to="/products">
                                    Products
                                </Link>
                            </li>
                            <li className="nav-item ms-3">
                                <Link className="nav-link" to="/pricing">
                                    Pricing
                                </Link>
                            </li>
                            <li className="nav-item ms-3">
                                <Link className="nav-link" to="/support">
                                    Support
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

        </>
    )
}

export default Navbar
