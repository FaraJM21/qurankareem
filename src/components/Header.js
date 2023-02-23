import React from "react";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import logo from "../assets/quran&&logo.png";
function Header() {
  return (
    <>
      <Navbar className="nav">
        <Navbar.Brand>
          <Link to={"/"}>
            <div className="logoTitle">
              <img
                src={logo}
                width="50"
                height="50"
                className="d-inline-block align-top"
                alt="logo"
              />
              Quran Kareem
            </div>
          </Link>
        </Navbar.Brand>
      </Navbar>
    </>
  );
}

export default Header;
