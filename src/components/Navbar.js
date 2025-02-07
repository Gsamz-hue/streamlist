import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav style={{ padding: "10px", backgroundColor: "#282c34", color: "white" }}>
      <Link to="/" style={{ marginRight: "10px", color: "white" }}>Home</Link>
      <Link to="/movies" style={{ marginRight: "10px", color: "white" }}>Movies</Link>
      <Link to="/cart" style={{ marginRight: "10px", color: "white" }}>Cart</Link>
      <Link to="/about" style={{ color: "white" }}>About</Link>
    </nav>
  );
}

export default Navbar;
