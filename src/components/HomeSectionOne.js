import React from "react";
import styled from "styled-components";
import { useStaticQuery, graphql } from "gatsby";
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
  background-color: #156096;
  background-size: cover;
  background-repeat: no-repeat;
  padding-top: 50px;
  padding-left: var(--pmd);
  padding-right: var(--pmd);

  .wrapper {
    max-width: var(--max-width);
    margin: 0 auto;
    color: var(--white);
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
      font-size: 4rem;
      font-weight: 900;

      .accent-word {
        color: #f31f53;
      }
    }

    p {
      font-size: 1.4rem;
      line-height: 2rem;
      margin-top: 2rem;
    }
  }
`;
