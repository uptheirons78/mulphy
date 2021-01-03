import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";
import Logo from "../images/fake-logo.svg";
import styled from "styled-components";
import NavLinks from "./NavLinks";

function MobileNavigation() {
  const { toggle, handleToggle } = useContext(GlobalContext);
  const mobileClass = toggle ? "open" : "";
  return (
    <StyledMobileMenu className={mobileClass} onClick={handleToggle}>
      <div className="logo-container">
        <img src={Logo} alt="Mulphy Logo" />
      </div>
      <NavLinks />
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
  background-color: var(--primaryColor);
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
        color: var(--white);
      }
    }
  }
`;
