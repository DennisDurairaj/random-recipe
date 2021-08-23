import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo_transparent.png";

interface Props {}

const Header = (props: Props) => {
  return (
    <nav>
      <div className="logo">
        <Link to="/">
          <img src={logo} alt="Logo" />
        </Link>
      </div>
    </nav>
  );
};

export default Header;
