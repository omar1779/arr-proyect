import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import imagen from "../../logoarifa.jpg";
const Navbar = () => {
  return (
    <nav>
      <img src={imagen} alt="Logo" />
      <ul>
        <li>
          <Link to="/">tabla</Link>
        </li>
        <li>
          <Link to="/Question">Pregunta</Link>
        </li>
        <li>
          <Link to="/Start">Start</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
