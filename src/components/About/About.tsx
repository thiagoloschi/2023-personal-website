import React, { ReactNode } from "react";
import "./About.scss"

interface Props {
  children: ReactNode;
}

export function About({children}: Props) {
  return (
    <div className="About">
      <div className="Text">{children}</div>
    </div>
  );
}
