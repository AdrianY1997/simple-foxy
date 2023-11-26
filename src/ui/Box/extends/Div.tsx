import { FoxyComponentBoxDiv } from "../../../types/box";

import React from "react";

const Div = ({ children, ...args }: FoxyComponentBoxDiv) => {
  return (
    <>
      <div {...args}>{children}</div>
    </>
  );
};

export { Div };
