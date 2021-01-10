import React from "react";
import styled from "styled-components";
import { GoBeaker, GoLightBulb, GoMegaphone } from "react-icons/go";
import {
  SectionName,
  SectionSummary,
  Wrapper,
} from "../styles/StyledPageElements";

const HomeSectionTwo = ({ title, description }) => {
  return (
    <StyledSectionTwo>
      <Wrapper>
        <SectionName>{title}</SectionName>
        <SectionSummary>{description}</SectionSummary>
        <div className="service-bulb-wrapper">
          <div className="service-bulb">
            <GoLightBulb />
            <h2>Brand Design</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis
              perspiciatis fugit quod iste animi. Doloremque!
            </p>
          </div>
          <div className="service-bulb">
            <GoMegaphone />
            <h2>Seo e Marketing</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis
              perspiciatis fugit quod iste animi. Doloremque!
            </p>
          </div>
          <div className="service-bulb">
            <GoBeaker />
            <h2>Design e Sviluppo</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis
              perspiciatis fugit quod iste animi. Doloremque!
            </p>
          </div>
        </div>
      </Wrapper>
    </StyledSectionTwo>
  );
};

export default HomeSectionTwo;

const StyledSectionTwo = styled.section`
  background-color: var(--clr-indigo-200);
  padding-top: var(--sp-4);
  padding-bottom: var(--sp-4);

  .service-bulb-wrapper {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: var(--sp-4);
    @media screen and (max-width: 600px) {
      grid-template-columns: repeat(1, 1fr);
      grid-gap: var(--sp-2);
    }
  }

  .service-bulb {
    padding: var(--sp-6) var(--sp-5);
    text-align: center;

    h2 {
      color: var(--clr-gray-800);
    }

    svg {
      fill: var(--clr-primary);
      width: 2rem;
      height: 2rem;
      margin-bottom: var(--sp-2);
    }
  }
`;
