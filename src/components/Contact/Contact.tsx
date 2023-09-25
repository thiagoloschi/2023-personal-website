import React from "react";
import { OutboundLink } from "gatsby-plugin-google-gtag";
import {type ContactInfo} from "../../types";
import "./Contact.scss"

interface Props {
  contactInfo: ContactInfo[];
}

export function Contact({contactInfo}: Props) {
  const contactInfoMap = contactInfo.map((info) => (
    <OutboundLink className="ContactLink" key={info.name} href={info.url} target="_blank" title={`Visit my ${info.name} profile`}>
      <i className={`Icon fa-brands fa-${info.name}`} />
    </OutboundLink>
  ));
    
  return (
    <div className="Contact">
      <div className="ContactMap">
        {contactInfoMap}
      </div>
    </div>
  );
}