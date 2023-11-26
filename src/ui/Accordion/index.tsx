"use client";

import React, { useState } from "react";
import { AccordionContext } from "./_context";
import AccordionTitle from "./extends/AccordionTitle";
import AccordionContent from "./extends/AccordionContent";
import { FoxyComponentAccordion } from "../../types/accordion";

const Accordion = ({
  active = false,
  children,
  ...args
}: FoxyComponentAccordion) => {
  const [isShow, setIsShow] = useState(active);

  return (
    <AccordionContext.Provider value={{ isShow, setIsShow }}>
      <div {...args}>{children}</div>
    </AccordionContext.Provider>
  );
};

Accordion.title = AccordionTitle;
Accordion.content = AccordionContent;

export default Accordion;
