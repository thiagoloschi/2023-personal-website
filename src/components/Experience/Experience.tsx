import React from "react";
import "./Experience.scss";
import { ExperienceCard } from "./components/ExperienceCard/ExperienceCard";
import { type Experience } from "../../types";
import { OutboundLink } from "gatsby-plugin-google-gtag";
import { useAnalytics } from "../../utils/use-profile-data/use-analytics/use-analytics";


interface Props {
  experience: Experience[];
}

export function Experience({ experience }: Props) {
  const {logSocialMediaClick} = useAnalytics();
  const experiences = experience.map((experienceInfo) => <ExperienceCard key={experienceInfo.company} experience={experienceInfo} />);

  const LinkMarkup = (
    <OutboundLink href="https://linkedin.com/in/thiagoloschi" onClick={() => logSocialMediaClick('linkedin')}>Linkedin profile</OutboundLink>
  );
  
  return (
    <div className="Experience">
      <div className="ExperienceWrapper">
        {experiences}
      </div>
      <p className="ExperienceSeeMore">Past work experience and other info can be found on my {LinkMarkup}.</p>
    </div>
  );
} 