import React, {useState, useEffect} from "react";
import { type Referral } from "../../types";
import { ReferralCard } from "../ReferralCard/ReferralCard";
import "./ReferralSection.scss";

interface Props {
  referrals: Referral[];
}

export function ReferralSection({referrals}: Props) {
  const [selectedReferralIndex, setSelectedReferralIndex] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      handleReferralSelection();
    }, 25000)

    return () => clearTimeout(timer);
  }, [selectedReferralIndex, setSelectedReferralIndex])

  const referralDots = new Array(referrals.length).fill(null).map((_, index) => {
    const mark = index === selectedReferralIndex ? '🗣️' : '🙋'
    return (
      <div style={{margin: '0 10px 0 0', fontSize: 18}} key={index} onClick={() => setSelectedReferralIndex(index)}>{mark}</div>
    )
  })
  
  const handleReferralSelection = () => {
    const nextReferral = selectedReferralIndex + 1;
    const nextReferralIndex = nextReferral < referrals.length ? nextReferral : 0;
    setSelectedReferralIndex(nextReferralIndex);    
  }
  
  return (
    <div className="ReferralSection">
      <ReferralCard referral={referrals[selectedReferralIndex]} />
      <div className="ReferralDots">
        {referralDots}
      </div>
    </div>
  );
}