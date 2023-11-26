import React from "react";
import { IconTimesProps } from "../../../../types/toast";

export default function Times({ ...args }: IconTimesProps) {
  return (
    <svg
      {...args}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  );
}
