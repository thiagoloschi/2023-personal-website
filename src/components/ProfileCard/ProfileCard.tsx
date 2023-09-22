import React from "react";
import {ProfileImage} from "../../components";
import "./ProfileCard.scss";

interface Props {
  imageUrl: string;
  name: string;
  location: string;
  role: string;
}

export function ProfileCard({imageUrl, name, location, role}: Props) {
  return (
    <div className="ProfileCard">
      <ProfileImage src={imageUrl} alt="profile picture" />
      <div className="Title">
        <p className="Name">{name}</p>
        <p className="Role">{role}</p>
        <p className="Location">{location}</p>
      </div>
    </div>
  );
}
