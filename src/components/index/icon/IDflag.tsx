import React from "react";

interface IDflagProps extends React.SVGProps<SVGSVGElement> {}

const IDflag = (props: IDflagProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={16} {...props}>
    <path fill="#fff" d="M0 0H24V16H0z" />
    <path fill="red" d="M0 0H24V8H0z" />
  </svg>
);

export default IDflag;
