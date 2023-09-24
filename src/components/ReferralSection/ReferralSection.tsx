import React, {useState, useEffect, KeyboardEventHandler, KeyboardEvent} from "react";
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
    const isSelected = index === selectedReferralIndex; 
    const dot = isSelected ? '🗣️' : '🙋'

    const selectWithSpaceKey = ({code}: KeyboardEvent) => {
      if(code !== 'Space') {
        return null;
      }

      setSelectedReferralIndex(index);
    }

    return (
      <div 
        className={`ReferralDot ${isSelected ? '' : 'DotHover'}`} 
        key={index} onClick={() => setSelectedReferralIndex(index)} 
        title={`View recommendation ${index + 1}/${referrals.length}`}
        tabIndex={0}
        onKeyDown={selectWithSpaceKey}
        >
          {dot}
      </div>
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