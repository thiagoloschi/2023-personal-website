import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"

import { 
  About, 
  Contact, 
  Experience, 
  Footer,
  ProfileCover,
  Recommendations, 
} from "../components";
import {useProfileData} from '../utils/use-profile-data/use-profile-data'

import "./global.scss";

const IndexPage: React.FC<PageProps> = (all) => {
  const {content} = useProfileData();
  
  return (
    <main>
      <ProfileCover name={content.name} role={content.role} location={content.location} imageUrl={content.picture}/>
      <About>
        {content.about}
        <br/><br/>
        <Contact contactInfo={content.contact} />
      </About>
      <Experience experience={content.experience} />
      <Recommendations referrals={content.referral} />
      <Footer>
        <p>® Handcrafted by me in 2023</p>
        <Contact contactInfo={content.contact} />
      </Footer>
    </main>
  )
}

export default IndexPage

export const Head: HeadFC = () => {
  return (
    <>
      <title>Thiago Loschi</title>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,100;0,9..40,200;0,9..40,300;0,9..40,400;0,9..40,600;1,9..40,100;1,9..40,400&family=Mooli&display=swap" rel="stylesheet" />
      <script src={`https://kit.fontawesome.com/${process.env.FONT_AWESOME_KEY}.js`} crossOrigin="anonymous"></script>
    </>
  );
}
