import React from "react";
import {type Recommendation} from '../../../../types';
import "./ReferralCard.scss";

interface Props {
  referral: Recommendation;
}

export function ReferralCard({referral: {message, referrer, relationship}}: Props) {
  return (
    <div className="ReferralCard">
      <p className="Message">{message}</p>
      <div>
        <p className="Referrer">{referrer}</p>
        <p className="Relationship">{relationship}</p>
      </div>
    </div>
  );
}