import React, { ReactNode } from "react";
import "./AboutSection.scss"

interface Props {
  children: ReactNode;
}

export function AboutSection({children}: Props) {
  return (
    <div className="AboutSection">
      <p className="Text">{children}</p>
    </div>
  );
}



