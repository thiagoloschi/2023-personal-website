import React from "react";
import "./ProfileCover.scss";

interface Props {
  imageUrl: string;
  name: string;
  location: string;
  role: string;
}

export function ProfileCover({imageUrl, name, location, role}: Props) {
  return (
    <div className="ProfileCover">
      <div className="ProfileImage" style={{backgroundImage: `url(${imageUrl})`}} title="profile picture" />
      <div className="Title">
        <p className="Name">{name}</p>
        <p className="Role">{role}</p>
        <p className="Location">{location}</p>
      </div>
    </div>
  );
}
