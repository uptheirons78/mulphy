import styled from "styled-components";

export const Wrapper = styled.section`
  max-width: var(--container-width);
  width: 100%;
  margin: 0 auto;
  padding: var(--sp-4);
`;

export const PageTitleSection = styled.div`
  padding-top: var(--sp-8);
  padding-bottom: var(--sp-8);

  h1 {
    color: var(--clr-primary);
    font-size: 1.6rem;
    font-weight: 600;
    text-transform: uppercase;
  }

  h3 {
    color: var(--clr-gray-800);
    font-size: 2.2rem;
    text-transform: uppercase;
  }
`;

export const Card = styled.article`
  max-width: 800px;
  width: 100%;
  padding-bottom: var(--sp-4);
  margin: 0 auto var(--sp-10) auto;
  border-bottom: 1px solid var(--clr-primary);
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: var(--sp-6);

  @media screen and (max-width: 580px) {
    grid-template-columns: repeat(1, 1fr);
    margin: 0 auto var(--sp-6) auto;
  }

  header {
    grid-column: span 1;

    small {
      color: var(--clr-gray-600);
    }
    p {
      margin-top: var(--sp-3);
      font-size: 0.8rem;
      color: var(--clr-gray-700);
      span {
        margin-right: var(--sp-2);
        background-color: var(--clr-secondary);
        color: var(--clr-gray-50);
        padding: var(--sp-1) var(--sp-2);
        transition: all 450ms ease;
        cursor: pointer;

        &:hover {
          background-color: var(--clr-primary);
        }
      }
    }
  }

  section {
    grid-column: span 2;

    @media screen and (max-width: 580px) {
      grid-column: span 1;
    }

    h2 {
      font-size: 1.8rem;
      color: var(--clr-gray-800);
      transition: all 450ms ease;

      &:hover {
        color: var(--clr-primary);
      }
    }

    p {
      color: var(--clr-gray-600);
      @media screen and (max-width: 580px) {
        font-size: 1.1rem;
      }

      .readmore {
        color: var(--clr-primary);
      }
    }
  }
`;

export const ArchivePagination = styled.div`
  max-width: 800px;
  width: 100%;
  margin: 1rem auto;
  display: flex;
  justify-content: space-around;

  a {
    color: var(--clr-primary);
    background-color: var(--clr-gray-50);
    padding: 0.3rem 0.6rem;
    border: 1px solid var(--clr-primary);
    transition: all 450ms ease-in-out;

    &:hover {
      background-color: var(--clr-primary);
      color: var(--clr-gray-50);
      transform: rotate(-2deg) scale(0.9);
    }
  }
`;

export const SectionName = styled.h2`
  color: var(--clr-primary);
  font-family: var(--font-primary);
  font-size: 1.4rem;
  font-weight: 600;
  text-transform: uppercase;
`;
export const SectionSummary = styled.h3`
  color: var(--clr-gray-800);
  font-size: 1.8rem;
  text-transform: uppercase;
  padding: var(--sp-3) 0;
`;
