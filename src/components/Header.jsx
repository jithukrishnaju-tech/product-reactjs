import React from "react";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <header>
      <Link to={"/"} className="link-class">
        <h1 className="product-name">Products</h1>
      </Link>
    </header>
  );
};

export default Header;
