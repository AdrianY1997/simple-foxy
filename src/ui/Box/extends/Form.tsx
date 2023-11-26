import React from "react";
import { FoxyComponentBoxForm } from "../../../types/box";

const Form = ({ children, ...args }: FoxyComponentBoxForm) => {
  return (
    <>
      <form {...args}>{children}</form>
    </>
  );
};

export { Form };
