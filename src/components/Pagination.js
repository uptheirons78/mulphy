import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";

const PaginationStyles = styled.div`
  color: var(--clr-gray-900);
  max-width: 600px;
  display: grid;
  grid-template-columns: auto 1fr auto;
  text-align: center;
  margin: 2rem auto;
  justify-items: center;
  align-items: center;

  @media (max-width: 750px) {
    grid-template-columns: 1fr;
    grid-gap: 1rem;
  }
  & > * {
    display: inline;
    text-decoration: none;
    padding: 4px;
    margin: 0;
    box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.1);
  }
  a {
    color: var(--clr-gray-900);
  }
  a[disabled] {
    opacity: 0.5;
    pointer-events: none;
    text-decoration: line-through;
  }
`;

export default function Pagination({
  totalCount,
  currentPage = 1,
  pathPrefix,
}) {
  const totalPages = Math.ceil(totalCount / 10);
  const nextPage = currentPage + 1;
  const prevPage = currentPage - 1;
  const prevLink = currentPage === 2 ? pathPrefix : `${pathPrefix}${prevPage}`;
  return (
    <PaginationStyles>
      <Link disabled={prevPage <= 0 ? true : null} to={prevLink}>
        ← Articoli precedenti
      </Link>
      <p>
        Pagina {currentPage} di {totalPages}
      </p>
      <Link
        disabled={nextPage > totalPages ? true : null}
        to={nextPage > totalPages ? null : `${pathPrefix}${nextPage}`}
      >
        {nextPage > totalPages
          ? `Non ci sono altri articoli`
          : `Articoli successivi →`}
      </Link>
    </PaginationStyles>
  );
}
