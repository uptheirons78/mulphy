import React, { useContext } from "react";
import { Link, useStaticQuery, graphql } from "gatsby";
import { GlobalContext } from "../context/GlobalContext";
import styled from "styled-components";
import NavLinks from "./NavLinks";

const Navigation = () => {
  const data = useStaticQuery(graphql`
    query {
      logo: file(relativePath: { eq: "mulphy-logo.png" }) {
        childImageSharp {
          resize(width: 200) {
            src
          }
        }
      }
    }
  `);
  const { handleToggle } = useContext(GlobalContext);
  return (
    <StyledNavigation>
      <div className="logo-container">
        <Link to="/">
          <img src={data.logo.childImageSharp.resize.src} alt="Mulphy Logo" />
        </Link>
      </div>
      <button
        className="hamburger-menu"
        aria-controls="mobile-menu"
        onClick={handleToggle}
      >
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
      <NavLinks />
    </StyledNavigation>
  );
};

export default Navigation;

const StyledNavigation = styled.nav`
  position: relative;
  height: 90px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: var(--container-width);
  margin: 0 auto;
  padding: 0 var(--sp-4);

  .logo-container {
    width: 130px;

    @media screen and (max-width: 580px) {
      width: 120px;
    }

    img {
      width: 100%;
    }
  }

  .hamburger-menu {
    border: none;
    background: var(--clr-gray-50);
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
      fill: var(--clr-gray-900);
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
      margin-right: var(--sp-4);
      a {
        color: var(--clr-gray-900);
      }
    }
  }
`;
