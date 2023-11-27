import {
  FoxyComponentTypographyVariantClases,
  OverridableTypography,
} from "../../types/typography";
import { Caption } from "./extend/Caption";
import { Heading1 } from "./extend/Heading1";
import { Heading2 } from "./extend/Heading2";
import { Heading3 } from "./extend/Heading3";
import { Heading4 } from "./extend/Heading4";
import { Heading5 } from "./extend/Heading5";
import { Heading6 } from "./extend/Heading6";
import { Paragraph } from "./extend/Paragraph";

import gStyle from "../global.module.css";
import lStyle from "./typography.module.css";
import classNames from "classnames";

const Typography = ({
  children,
  variant = "paragraph",
  ...args
}: OverridableTypography) => {
  args.className = classNames(
    gStyle[`color-${args.color}`],
    lStyle.element,
    lStyle[variant],
    args.className
  );

  const variantClassses: FoxyComponentTypographyVariantClases = {
    h1: Heading1({ children, ...args }),
    h2: Heading2({ children, ...args }),
    h3: Heading3({ children, ...args }),
    h4: Heading4({ children, ...args }),
    h5: Heading5({ children, ...args }),
    h6: Heading6({ children, ...args }),
    paragraph: Paragraph({ children, ...args }),
    caption: Caption({ children, ...args }),
  };

  return variantClassses[variant];
};

export default Typography;
