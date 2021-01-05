import React from "react";
import { Link, useStaticQuery, graphql } from "gatsby";
import styled from "styled-components";

const Footer = () => {
  const data = useStaticQuery(graphql`
    query {
      logo: file(relativePath: { eq: "mulphy-logo.png" }) {
        childImageSharp {
          resize(width: 120) {
            src
          }
        }
      }
      background: file(relativePath: { eq: "mulphy-footer-bg.png" }) {
        childImageSharp {
          resize(width: 1200) {
            src
          }
        }
      }
    }
  `);
  return (
    <StyledFooter
      style={{
        backgroundImage: `url(${data.background.childImageSharp.resize.src})`,
      }}
    >
      <section className="footer-container">
        <section className="top-footer">
          <div className="top-footer-section about">
            <h3>Mulphy</h3>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Molestiae, commodi.
            </p>
          </div>
          <div className="top-footer-section navigation">
            <h3>Links Utili</h3>
            <ul>
              <li>
                <Link to="/">Chi Siamo</Link>
              </li>
              <li>
                <Link to="/">Portfolio</Link>
              </li>
              <li>
                <Link to="/">Blog</Link>
              </li>
              <li>
                <Link to="/">Contatti</Link>
              </li>
            </ul>
          </div>
          <div className="top-footer-section contact-info">
            <h3>Contatti</h3>
            <p>
              9567 Turner Trace Apt. 466 North
              <br />
              Willie, BC C3G8A4
              <br />
              +21 123 456 5523
              <br />
              hello@mulphy.com
            </p>
          </div>
        </section>
        <section className="bottom-footer">
          <div className="left">mulphy. © 2020 All Rights Reserved</div>
          <div className="center">
            <img src={data.logo.childImageSharp.resize.src} alt="Mulphy Logo" />
          </div>
          <div className="right">
            <ul>
              <li>
                <Link to="/">Privacy Policy</Link>
              </li>
              <li>
                <Link to="/">Cookie Policy</Link>
              </li>
            </ul>
          </div>
        </section>
      </section>
    </StyledFooter>
  );
};

export default Footer;

const StyledFooter = styled.footer`
  background-color: var(--clr-lightblue-900);
  background-repeat: no-repeat;
  background-size: cover;
  color: var(--clr-gray-50);
  padding-top: var(--sp-8);

  ul {
    list-style-type: none;
  }

  a {
    color: var(--clr-gray-50);
  }

  .footer-container {
    max-width: var(--container-width);
    width: 100%;
    margin: 0 auto;
    padding: var(--sp-4);

    .top-footer {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      grid-gap: var(--sp-4);

      .top-footer-section {
        padding-top: var(--sp-4);
        padding-bottom: var(--sp-4);
        h3 {
          font-size: 1.6rem;
          padding-top: var(--sp-4);
          padding-bottom: var(--sp-2);
        }
        &.navigation,
        &.contact-info {
          margin: 0 auto;
        }
      }
    }

    .bottom-footer {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      margin-top: var(--sp-5);
      padding-top: var(--sp-5);
      padding-bottom: var(--sp-6);
      border-top: 1px solid var(--clr-indigo-300);

      .center {
        text-align: center;

        img {
          transform: translateY(-15%);
        }
      }

      .right {
        ul {
          display: flex;
          justify-content: flex-end;

          a {
            margin-left: var(--sp-3);
          }
        }
      }
    }
  }
`;
