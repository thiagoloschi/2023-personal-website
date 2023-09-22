import React, { ReactNode } from "react";
import "./Footer.scss";

interface Props {
  children: ReactNode;
}

export function Footer({children}: Props) {
  return (
    <div className="Footer">
      {children}
    </div>
  );
}