import React, { ReactNode } from "react";
import "./AboutSection.scss"

interface Props {
  children: ReactNode;
}

export function AboutSection({children}: Props) {
  return (
    <div className="AboutSection">
      <div className="Text">{children}</div>
    </div>
  );
}
