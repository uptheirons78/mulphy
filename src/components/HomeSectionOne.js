import React from "react";
import styled from "styled-components";
import { useStaticQuery, graphql, Link } from "gatsby";
import Img from "gatsby-image";
import { Wrapper } from "../styles/StyledPageElements";

const HomeSectionOne = () => {
  const data = useStaticQuery(graphql`
    query {
      background: file(relativePath: { eq: "mulphy-section-1.png" }) {
        childImageSharp {
          resize(width: 1200) {
            src
          }
        }
      }
      museo: file(relativePath: { eq: "mulphy-museociviconepi.png" }) {
        childImageSharp {
          fluid(maxWidth: 220) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);
  return (
    <StyledSectionOne
      className="section-one"
      style={{
        backgroundImage: `url(${data.background.childImageSharp.resize.src})`,
      }}
    >
      <Wrapper className="main-wrapper">
        <div className="left-container">
          <h1>
            Immaginiamo il
            <br /> cambiamento con
            <br /> <span className="accent-word">creatività</span>
          </h1>
          <p>
            Mulphy è un'agenzia creativa
            <br />
            che lavora per migliorare la presenza digitale
            <br />
            dei suoi clienti.
          </p>
          <Link className="home-cta" to="/contatti">
            Chiedi un preventivo ›
          </Link>
        </div>
        <div className="right-container">
          <div className="img-container">
            <div className="img-frame img-frame-left">
              <Img
                alt="Mulphy: agenzia creativa e digitale"
                fluid={data.museo.childImageSharp.fluid}
              />
            </div>
            <div className="img-frame img-frame-right">
              <Img
                alt="Mulphy: agenzia creativa e digitale"
                fluid={data.museo.childImageSharp.fluid}
              />
            </div>
          </div>
        </div>
      </Wrapper>
    </StyledSectionOne>
  );
};

export default HomeSectionOne;

const StyledSectionOne = styled.section`
  background-color: var(--clr-secondary);
  background-size: cover;
  background-repeat: no-repeat;
  padding-top: 50px;
  padding-bottom: 50px;

  @media screen and (max-width: 671px) {
    padding-top: 20px;
    padding-bottom: 30px;
  }

  .main-wrapper {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: var(--sp-4);

    @media screen and (max-width: 481px) {
      grid-template-columns: repeat(4, 1fr);
    }
  }

  .left-container {
    grid-column: span 2;

    @media screen and (max-width: 481px) {
      grid-column: span 4;
    }

    h1 {
      color: var(--clr-gray-50);
      font-size: 3rem;
      padding: var(--sp-4) 0;

      @media screen and (max-width: 671px) {
        font-size: 2.4rem;
      }

      .accent-word {
        color: var(--clr-primary);
      }
    }

    p {
      color: var(--clr-gray-50);
      font-size: 1.2rem;
      padding: var(--sp-2) 0;

      @media screen and (max-width: 671px) {
        font-size: 1rem;
      }
    }

    a {
      display: inline-block;
      color: var(--clr-gray-50);
      margin-top: 1rem;
      padding: var(--sp-2) var(--sp-4);
      background-color: var(--clr-primary);
      transition: all 450ms ease-in;

      &:hover {
        color: var(--clr-primary);
        background-color: var(--clr-gray-50);
      }
    }
  }

  .right-container {
    grid-column: span 1;
    @media screen and (max-width: 481px) {
      display: none;
    }

    .img-container {
      position: relative;
      width: 100%;
      height: 100%;

      .img-frame {
        max-width: 140px;
        width: 100%;

        @media screen and (max-width: 671px) {
          max-width: 120px;
        }

        @media screen and (max-width: 481px) {
          max-width: 100px;
        }
      }
      .img-frame-left {
        position: absolute;
        top: 5%;
        left: 15%;
        z-index: 4;

        @media screen and (max-width: 600px) {
          left: 0;
        }
      }
      .img-frame-right {
        position: absolute;
        top: 20%;
        left: 34%;
        z-index: 2;
        @media screen and (max-width: 600px) {
          left: 20%;
        }
      }
    }
  }
`;
