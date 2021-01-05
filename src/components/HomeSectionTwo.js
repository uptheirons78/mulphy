import React from "react";
import styled from "styled-components";
import { GoBeaker, GoLightBulb, GoMegaphone } from "react-icons/go";

const HomeSectionTwo = () => {
  return (
    <StyledSectionTwo>
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
    </StyledSectionTwo>
  );
};

export default HomeSectionTwo;

const StyledSectionTwo = styled.section`
  max-width: var(--container-width);
  width: 100%;
  margin: 0 auto;
  padding-top: var(--sp-8);
  padding-bottom: var(--sp-6);
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: var(--sp-4);

  .service-bulb {
    padding: var(--sp-6) var(--sp-5);
    text-align: center;

    svg {
      fill: var(--clr-primary);
      width: 2rem;
      height: 2rem;
      margin-bottom: var(--sp-2);
    }
  }
`;
