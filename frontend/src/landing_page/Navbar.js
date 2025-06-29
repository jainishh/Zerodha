import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-light border-bottom ">
      <div className="container p-2">
        <Link className="navbar-brand" to="/">
          <img
            src="media\images\logo.svg"
            alt="logo"
            style={{ width: "140px" }}
          />
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse justify-content-center"
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav text-center gap-2">
            <li className="nav-item">
              <Link
                className="nav-link"
                aria-current="page"
                to="/signup"
                style={{ fontWeight: "500", color: "#666666" }}
              >
                Signup
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link"
                to="/about"
                style={{ fontWeight: "500", color: "#666666" }}
              >
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link"
                to="/products"
                style={{ fontWeight: "500", color: "#666666" }}
              >
                Poducts
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link"
                to="pricing"
                style={{ fontWeight: "500", color: "#666666" }}
              >
                Pricing
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link"
                to="support"
                style={{ fontWeight: "500", color: "#666666" }}
              >
                Support
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
