import React from "react";
import HeaderIcon from "./HeaderIcon";
import HeaderAcess from "./HeaderAcess";
import "../styles/Header.css";

const Header = () => {
  return (
    <header className="container-lg">
      <HeaderIcon />
      <HeaderAcess />
    </header>
  );
};

export default Header;
