"use client";

import { useContext } from "react";
import { AccordionContext } from "./_context";
import { AccordionContextType } from "../../types/accordion";

export const useAccordionContext = (): AccordionContextType => {
  const context = useContext(AccordionContext);
  if (!context) {
    throw new Error("Section must be used within a Section Provider");
  }
  return context;
};
