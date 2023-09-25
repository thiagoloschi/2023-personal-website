import React from "react";
import "./ExperienceCard.scss";
import { type Experience } from "../../../../types";
import { OutboundLink } from "gatsby-plugin-google-gtag";

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
        <OutboundLink className="CompanyLink" href={experience.url} target="_blank" title={`Visit ${experience.company}'s website`}> 
          <div className="ImageWrapper">
            <img src={experience.image} />
          </div>
        </OutboundLink>
      <p>{experience.description}</p>
    </div>
  );
} 