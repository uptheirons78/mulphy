/** eslint-disable */
import React from "react";
import styled from "styled-components";

const Accordion = ({ faq }) => {
  return (
    <StyledAccordion>
      {faq.map(f => {
        return (
          <div className="tab" key={f.faqId}>
            <input type="checkbox" id={f.faqId} />
            <label className="tab-label" htmlFor={f.faqId}>
              {f.question}
            </label>
            <div
              className="tab-content"
              dangerouslySetInnerHTML={{ __html: f.answer }}
            ></div>
          </div>
        );
      })}
    </StyledAccordion>
  );
};

export default Accordion;

const StyledAccordion = styled.div`
  overflow: hidden;
  box-shadow: var(--shadow-light);
  max-width: 700px;
  width: 100%;
  margin: 2rem auto;

  .tab {
    width: 100%;
    color: var(--clr-gray-600);
    overflow: hidden;

    .tab-label {
      display: flex;
      justify-content: space-between;
      padding: 1rem;
      background: var(--clr-gray-50);
      color: var(--clr-gray-700);
      font-family: var(--font-secondary);
      font-size: 1.2rem;
      font-weight: 600;
      text-transform: uppercase;
      border-bottom: 1px solid var(--clr-gray-300);

      &::after {
        content: "›";
        width: 1rem;
        height: 1rem;
        font-size: 1.6rem;
        text-align: center;
        transform: rotate(90deg);
        transition: all 0.35s;
      }
    }
    .tab-content {
      max-height: 0;
      padding: 0 1rem;
      color: var(--clr-gray-600);
      background: white;
      transition: all 0.35s;
    }
  }

  input {
    position: absolute;
    opacity: 0;
    z-index: -1;
  }
  // :checked
  input:checked {
    + .tab-label {
      background: var(clr-gray-600);
      &::after {
        color: var(--clr-secondary);
      }
    }
    ~ .tab-content {
      max-height: 100vh;
      padding: 1em;
    }
  }
`;
