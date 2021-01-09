import React from "react";
import styled from "styled-components";
import { SectionName, SectionSummary } from "../styles/StyledPageElements";
import Accordion from "./Accordion";

const AccordionSection = ({ faq }) => {
  return (
    <StyledAccordionSection>
      <SectionName>F.A.Q.</SectionName>
      <SectionSummary>
        Alcune risposte alle domande più frequenti che ci vengono poste.
      </SectionSummary>
      <Accordion faq={faq} />
    </StyledAccordionSection>
  );
};

export default AccordionSection;

const StyledAccordionSection = styled.section`
  max-width: var(--container-width);
  width: 100%;
  margin: 0 auto;
  padding-top: var(--sp-8);
  padding-bottom: var(--sp-6);
`;
