import React from 'react';
import './ProfileImage.scss';

interface Props {
  src: string;
  alt: string;
}

export function ProfileImage({src, alt}: Props) {
  return (
    <div className="ProfileImageWrapper" style={{backgroundImage: `url(${src})`}} title={alt}>
      {/* <img className="Image" src={src} alt={alt}></img> */}
    </div>
  )
}