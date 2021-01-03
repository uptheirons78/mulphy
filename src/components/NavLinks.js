import React from "react";
import { Link } from "gatsby";

const NavLinks = () => {
  return (
    <ul>
      <li>
        <Link to="/">Chi Siamo</Link>
      </li>
      <li>
        <Link to="/projects">Portfolio</Link>
      </li>
      <li>
        <Link to="/blog">Blog</Link>
      </li>
      <li>
        <Link to="/">Contatti</Link>
      </li>
    </ul>
  );
};

export default NavLinks;
