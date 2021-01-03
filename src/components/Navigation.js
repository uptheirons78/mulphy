import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";
import Logo from "../images/fake-logo.svg";

const Navigation = () => {
  return (
    <StyledNavigation>
      <div className="logo-container">
        <img src={Logo} alt="Mulphy Logo" />
      </div>
      <button className="hamburger-menu" aria-controls="mobile-menu">
        <svg
          class="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4 6h16M4 12h16M4 18h16"
          ></path>
        </svg>
      </button>
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
    </StyledNavigation>
  );
};

export default Navigation;

const StyledNavigation = styled.nav`
  height: 90px;
  padding: 0 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 2px solid var(--black);

  .logo-container {
    width: 180px;
    img {
      width: 100%;
    }
  }

  .hamburger-menu {
    border: none;
    background: var(--white);
    display: none;
    &:focus {
      outline: none;
    }

    @media screen and (max-width: 580px) {
      display: block;
    }

    svg {
      width: 30px;
      height: 30px;
      fill: var(--black);
    }
  }

  ul {
    list-style-type: none;
    display: flex;
    align-items: center;

    @media screen and (max-width: 580px) {
      display: none;
    }

    li {
      margin-right: 1rem;
      a {
        color: var(--black);
      }
    }
  }
`;
