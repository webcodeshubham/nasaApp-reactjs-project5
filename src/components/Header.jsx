import React from "react";
import "../assets/css/style.css";
import brandLogo from "../assets/icons/brand-logo.svg";
import searchLogo from "../assets/icons/search-icon.svg";
import nasaLogo from "../assets/icons/nasa-logo.svg";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <header className="flex justify-btwn align-cntr">
        <div className="brand-logo flex justify-start align-cntr">
          <img src={brandLogo} alt="brand-logo" />
          <span>
            Nasa<span id="tech">Technology Transfer</span>Program
          </span>
        </div>
        <nav className="navbar flex justify-arnd align-cntr">
          <Link to={"/"}>Patent Portfolio</Link>
          <Link to={"/"}>Add To Wishlist</Link>
          <Link to={"/"}>Log In</Link>
          <Link to={"/"}>
            <img id="search-icon" src={searchLogo} alt="search-icon" />
          </Link>
          <Link to={"/"}>
            <img id="nasa-logo" src={nasaLogo} alt="nasa-logo" />
          </Link>
        </nav>
      </header>
    </>
  );
};

export default Header;
