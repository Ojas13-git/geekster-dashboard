import * as React from "react";

function CollapsIcon({ fill = "#6C7281", ...rest }) {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 14 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M11.6667 1H2.33333C1.59695 1 1 1.59695 1 2.33333V11.6667C1 12.403 1.59695 13 2.33333 13H11.6667C12.403 13 13 12.403 13 11.6667V2.33333C13 1.59695 12.403 1 11.6667 1Z"
        stroke="#64748B"
        stroke-width="0.666667"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M7 1V13"
        stroke="#64748B"
        stroke-width="0.666667"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <rect x="7" y="1" width="6" height="12" rx="1" fill="#64748B" />
    </svg>
  );
}

export default CollapsIcon;
