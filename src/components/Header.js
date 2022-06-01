import React from "react";
import { IconName, FiSunrise } from "react-icons/fi";

const Header = () => {
  return (
    <div className="header">
      <FiSunrise fontSize={35} />
      <h2 className="title">My Travel Blog</h2>
    </div>
  );
};

export default Header;
