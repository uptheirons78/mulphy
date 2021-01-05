import React, { useContext } from "react";
import { Link, useStaticQuery, graphql } from "gatsby";
import { GlobalContext } from "../context/GlobalContext";
import styled from "styled-components";
import NavLinks from "./NavLinks";
import SocialNav from "./SocialNav";

function MobileNavigation() {
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
  const { toggle, handleToggle } = useContext(GlobalContext);
  const mobileClass = toggle ? "open" : "";
  return (
    <StyledMobileMenu className={mobileClass} onClick={handleToggle}>
      <div className="logo-container">
        <Link to="/">
          <img src={data.logo.childImageSharp.resize.src} alt="Mulphy Logo" />
        </Link>
      </div>
      <NavLinks />
      <SocialNav />
    </StyledMobileMenu>
  );
}

export default MobileNavigation;

const StyledMobileMenu = styled.nav`
  position: absolute;
  top: 0;
  left: -100%;
  z-index: 10;
  width: 85vw;
  height: 100vh;
  opacity: 0;
  background-color: var(--clr-teal-700);
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  transition: all 0.5s ease-in-out;
  transition-delay: 250ms;

  &.open {
    left: 0;
    opacity: 1;
  }

  .logo-container {
    width: 180px;
    padding-right: 2rem;
    margin-top: 1rem;
    img {
      width: 100%;
    }
  }

  ul {
    list-style-type: none;
    display: flex;
    flex-direction: column;
    text-align: right;
    padding-right: 2rem;
    margin-top: 2rem;

    li {
      margin-bottom: 1rem;

      a {
        color: var(--clr-gray-50);
      }
    }
  }
`;
