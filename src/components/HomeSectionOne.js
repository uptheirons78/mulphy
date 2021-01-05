import React from "react";
import styled from "styled-components";
import { useStaticQuery, graphql, Link } from "gatsby";
import Img from "gatsby-image";

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
          fixed(width: 220, quality: 90) {
            ...GatsbyImageSharpFixed
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
      <div className="wrapper">
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
            Chiedi un preventivo →
          </Link>
        </div>
        <div className="right-container">
          <Img
            fixed={data.museo.childImageSharp.fixed}
            alt="Museo Civico Nepi"
            className="mockup"
          />
        </div>
      </div>
    </StyledSectionOne>
  );
};

export default HomeSectionOne;

const StyledSectionOne = styled.section`
  height: calc(100vh - 90px);
  background-color: var(--clr-secondary);
  background-size: cover;
  background-repeat: no-repeat;
  padding-top: 50px;
  padding-left: var(--sp-4);
  padding-right: var(--sp-4);

  .wrapper {
    max-width: var(--container-width);
    margin: 0 auto;
    color: var(--clr-gray-50);
    display: grid;
    grid-template-columns: 1fr 1fr;

    .left-container {
      grid-column: span 1;
    }

    .right-container {
      grid-column: span 1;
      position: relative;

      .mockup {
        margin-left: 6rem;
        margin-top: 3rem;
      }
    }

    h1 {
      font-size: 3.5rem;
      font-weight: 900;

      .accent-word {
        color: var(--clr-primary);
      }
    }

    p {
      font-size: 1.4rem;
      line-height: 2rem;
      margin-top: var(--sp-4);
    }

    .home-cta {
      display: inline-block;
      margin-top: var(--sp-6);
      background-color: var(--clr-primary);
      color: var(--clr-gray-50);
      padding: var(--sp-1) var(--sp-4);
      transition: all 450ms;

      &:hover {
        letter-spacing: 1px;
      }
    }
  }
`;
