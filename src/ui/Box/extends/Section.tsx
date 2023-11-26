import React from "react";
import { FoxyComponentBoxSection } from "../../../types/box";

const Section = ({ children, ...args }: FoxyComponentBoxSection) => {
  return (
    <>
      <section {...args}>{children}</section>
    </>
  );
};

export { Section };
