import React from "react";
import Navbar from "react-bootstrap/Navbar";
import logo from "../assets/quran&&logo.png";
function Header() {
  return (
    <>
      <Navbar className="nav">
        <Navbar.Brand>
          <div className="logoTitle">
            <img
              src={logo}
              width="50"
              height="50"
              className="d-inline-block align-top"
              alt="logo"
            />
            <h3 className="title">Quran Kareem</h3>
          </div>
        </Navbar.Brand>
      </Navbar>
    </>
  );
}

export default Header;
