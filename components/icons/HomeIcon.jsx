import * as React from "react";

function HomeIcon({ fill = "#6C7281", ...rest }) {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M14.6667 8H10.6667L9.33337 10H6.66671L5.33337 8H1.33337"
        stroke="#334155"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M3.63337 3.40663L1.33337 7.99996V12C1.33337 12.3536 1.47385 12.6927 1.7239 12.9428C1.97395 13.1928 2.31309 13.3333 2.66671 13.3333H13.3334C13.687 13.3333 14.0261 13.1928 14.2762 12.9428C14.5262 12.6927 14.6667 12.3536 14.6667 12V7.99996L12.3667 3.40663C12.2563 3.18448 12.0862 2.99754 11.8753 2.86681C11.6645 2.73608 11.4214 2.66676 11.1734 2.66663H4.82671C4.57865 2.66676 4.33555 2.73608 4.12474 2.86681C3.91392 2.99754 3.74376 3.18448 3.63337 3.40663Z"
        stroke="#334155"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
}

export default HomeIcon;
