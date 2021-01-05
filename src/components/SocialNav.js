import React from "react";
import styled from "styled-components";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaTwitter,
  FaEnvelope,
} from "react-icons/fa";

const SocialNav = () => {
  return (
    <StyledSocialList className="social-list">
      <li className="social-link">
        <a href="mailto:info@mulphy.com">
          <FaEnvelope />
        </a>
      </li>
      <li className="social-link">
        <a
          href="https://www.facebook.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaFacebookF />
        </a>
      </li>
      <li className="social-link">
        <a
          href="https://it.linkedin.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedinIn />
        </a>
      </li>
      <li className="social-link">
        <a
          href="https://twitter.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaTwitter />
        </a>
      </li>
    </StyledSocialList>
  );
};

export default SocialNav;

const StyledSocialList = styled.nav`
  display: flex;
  justify-content: flex-end;
  list-style-type: none;
  margin-right: 2rem;
  margin-top: 2vh;
  li {
    margin-left: 0.6rem;
  }
  svg {
    fill: var(--clr-teal-700);
    background: var(--clr-gray-50);
    width: 1.7rem;
    height: 1.7rem;
    padding: 0.4rem;
  }
`;
