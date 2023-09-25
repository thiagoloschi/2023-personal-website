import React from "react";
import "./ProfileCover.scss";

interface Props {
  name: string;
  location: string;
  role: string;
  avatarURL: string;
  coverURL: string;
}

export function ProfileCover({avatarURL, coverURL, name, location, role}: Props) {
  return (
    <div className="ProfileCover" style={{backgroundImage: `url(${coverURL})`}}>
      <div className="ProfileImage" style={{backgroundImage: `url(${avatarURL})`}} title="profile picture" />
      <div className="Title">
        <p className="Name">{name}</p>
        <p className="Role">{role}</p>
        <p className="Location">{location}</p>
      </div>
    </div>
  );
}
