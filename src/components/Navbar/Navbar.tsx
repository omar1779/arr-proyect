import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import imagen from "../../assets/logoarifa.jpg";
const Navbar = () => {
  return (
    <nav>
      <img src={imagen} alt="Logo" />
      <ul>
        <li>
          <Link to="/">Start</Link>
        </li>
        <li>
          <Link to="/Question">Pregunta</Link>
        </li>
        <li>
          <Link to="/Tabla">Tabla</Link>
        </li>
		<li>
          <Link to="/Reports">Reports</Link>
        </li>
        <li>
          <Link to="/Submit">SandBox</Link>
        </li>
		<li className="destacar">
          <Link to="/Login">Login</Link>
        </li>
		<li >
          <Link to="/GestorEntidades">GestorEntidades</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
