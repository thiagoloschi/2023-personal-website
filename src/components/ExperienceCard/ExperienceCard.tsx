import React from "react";
import "./ExperienceCard.scss";
import { type Experience } from "../../types";

interface Props {
  experience: Experience;
}

export function ExperienceCard({ experience }: Props) {
  return (
    <div className="ExperienceCard" style={{backgroundColor: experience.color, color: experience.text}}>
      <h2 className="Year">{experience.year}</h2>
      <p>
        {experience.role}
      </p>
      <div className="ImageWrapper">
        <img src={experience.image} />
      </div>
      <p>{experience.description}</p>
    </div>
  );
} 