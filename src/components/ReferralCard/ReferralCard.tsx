import React from "react";
import {type Referral} from '../../types';
import "./ReferralCard.scss";

interface Props {
  referral: Referral;
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