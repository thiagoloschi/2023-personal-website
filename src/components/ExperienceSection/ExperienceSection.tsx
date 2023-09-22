import React from "react";
import "./ExperienceSection.scss";
import { ExperienceCard } from "../ExperienceCard/ExperienceCard";
import { type Experience } from "../../types";

interface Props {
  experience: Experience[];
}

export function ExperienceSection({ experience }: Props) {
  
  return (
    <div className="ExperienceSection">
      <div className="ExperienceWrapper">
        {experience.map((experienceInfo) => <ExperienceCard experience={experienceInfo} />)}
      </div>
      <p>Past work experience and other info can be found on my <a href="https://linkedin.com/in/thiagoloschi">Linkedin profile</a>.</p>
    </div>
  );
} 