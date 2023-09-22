import React from "react";
import {type ContactInfo} from "../../types";
import "./ContactSection.scss"

interface Props {
  contactInfo: ContactInfo[];
}

export function ContactSection({contactInfo}: Props) {
  const contactInfoMap = contactInfo.map((info) => (
    <a className="ContactLink" key={info.name} href={info.url}>
      <i className={`Icon fa-brands fa-${info.name}`} />
    </a>
  ));
    
  return (
    <div className="ContactSection">
      <div className="ContactMap">
        {contactInfoMap}
      </div>
    </div>
  );
}