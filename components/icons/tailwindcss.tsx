import type { SVGProps } from "react";

const TailwindCSS = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 256 154"
    xmlns="http://www.w3.org/2000/svg"
    aria-label="Tailwind CSS"
    role="img"
    {...props}
  >
    <defs>
      <linearGradient
        id="tailwind-gradient"
        x1="-2.778%"
        y1="32%"
        x2="100%"
        y2="67.556%"
      >
        <stop offset="0%" stopColor="#2298BD" />
        <stop offset="100%" stopColor="#0ED7B5" />
      </linearGradient>
    </defs>

    <path
      fill="url(#tailwind-gradient)"
      d="M128 0C93.867 0 72.533 17.067 64 51.2
      76.8 34.133 91.733 27.733 108.8 32
      c9.737 2.434 16.697 9.499 24.401 17.318
      C145.751 62.057 160.275 76.8 192 76.8
      c34.133 0 55.467-17.067 64-51.2
      -12.8 17.067-27.733 23.467-44.8 19.2
      -9.737-2.434-16.697-9.499-24.401-17.318
      C174.249 14.743 159.725 0 128 0ZM64 76.8
      C29.867 76.8 8.533 93.867 0 128
      c12.8-17.067 27.733-23.467 44.8-19.2
      9.737 2.434 16.697 9.499 24.401 17.318
      C81.751 138.857 96.275 153.6 128 153.6
      c34.133 0 55.467-17.067 64-51.2
      -12.8 17.067-27.733 23.467-44.8 19.2
      -9.737-2.434-16.697-9.499-24.401-17.318
      C110.249 91.543 95.725 76.8 64 76.8Z"
    />
  </svg>
);

export default TailwindCSS;