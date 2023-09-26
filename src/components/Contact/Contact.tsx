import React from "react";
import { OutboundLink } from "gatsby-plugin-google-gtag";
import {type ContactInfo} from "../../types";

import { useAnalytics } from "../../utils/use-profile-data/use-analytics/use-analytics";
import "./Contact.scss"

interface Props {
  contactInfo: ContactInfo[];
}

export function Contact({contactInfo}: Props) {
  const {logSocialMediaClick} = useAnalytics();

  const contactInfoMap = contactInfo.map((info) => (
    <OutboundLink 
      className="ContactLink" 
      key={info.name} 
      href={info.url} 
      target="_blank" 
      title={`Visit my ${info.name} profile`} 
      onClick={() => logSocialMediaClick(info.name)}
    >
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