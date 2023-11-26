import React from "react";
import AccordionTitle from "./extends/AccordionTitle";
import AccordionContent from "./extends/AccordionContent";
import { FoxyComponentAccordion } from "../../types/accordion";
declare const Accordion: {
    ({ active, children, ...args }: FoxyComponentAccordion): React.JSX.Element;
    title: typeof AccordionTitle;
    content: typeof AccordionContent;
};
export default Accordion;
