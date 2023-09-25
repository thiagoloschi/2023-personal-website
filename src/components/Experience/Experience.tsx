import React from "react";
import "./Experience.scss";
import { ExperienceCard } from "./components/ExperienceCard/ExperienceCard";
import { type Experience } from "../../types";

interface Props {
  experience: Experience[];
}

export function Experience({ experience }: Props) {
  const experiences = experience.map((experienceInfo) => <ExperienceCard key={experienceInfo.company} experience={experienceInfo} />);
  
  return (
    <div className="Experience">
      <div className="ExperienceWrapper">
        {experiences}
      </div>
      <p className="ExperienceSeeMore">Past work experience and other info can be found on my <a href="https://linkedin.com/in/thiagoloschi">Linkedin profile</a>.</p>
    </div>
  );
} 