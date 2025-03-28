import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container">
                <a className="navbar-brand" href="#">
                    Inventory System
                </a>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav me-auto">
                        <li className="nav-item">
                            <Link className="nav-link" to="/dashboard">
                                Dashboard
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/products">
                                Products
                            </Link>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">
                                Categories
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">
                                Suppliers
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">
                                Stock Management
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">
                                Reports
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">
                                Users
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">
                                Settings
                            </a>
                        </li>
                    </ul>
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a
                                className="nav-link btn btn-outline-danger"
                                href="#"
                            >
                                Logout
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
