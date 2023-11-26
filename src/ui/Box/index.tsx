import React from "react";
import { FoxyComponentBoxTypes, OverridableBox } from "../../types/box";
import { Div } from "./extends/Div";
import { Section } from "./extends/Section";
import { Form } from "./extends/Form";

const Box = (props: OverridableBox) => {
  const components: FoxyComponentBoxTypes = {
    div: Div(props as any),
    section: Section(props as any),
    form: Form(props as any),
  };

  return components[props.component || "div"];
};

export default Box;
