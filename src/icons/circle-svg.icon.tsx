import { SVGProps } from "react";

const CircleSvg = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="3"
      height="2"
      viewBox="0 0 3 2"
      fill="none"
      {...props}
    >
      <circle cx="1.25098" cy="1" r="1" fill="currentColor" />
    </svg>
  );
};

export default CircleSvg;
