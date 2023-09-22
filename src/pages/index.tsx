import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import { 
  AboutSection, 
  ContactSection, 
  ExperienceSection, 
  Footer,
  ProfileCard,
  ReferralSection, 
} from "../components";
import {useProfileData} from '../utils/use-profile-data/use-profile-data'
import "./global.scss";

const IndexPage: React.FC<PageProps> = (all) => {
  const {content} = useProfileData();
  
  return (
    <main>
      <ProfileCard name={content.name} role={content.role} location={content.location} imageUrl={content.picture}/>
      <AboutSection>
        <p>{content.about}</p>
        <br/><br/>
        <ContactSection contactInfo={content.contact} />
      </AboutSection>
      <ExperienceSection experience={content.experience} />
      <ReferralSection referrals={content.referral} />
      <Footer>
        <p>® Handcrafted by me in 2023</p>
        <ContactSection contactInfo={content.contact} />
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
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
      <link href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,100;0,9..40,200;0,9..40,300;0,9..40,400;0,9..40,600;1,9..40,100;1,9..40,400&family=Mooli&display=swap" rel="stylesheet" />
      <script src={`https://kit.fontawesome.com/${process.env.FONT_AWESOME_KEY}.js`} crossOrigin="anonymous"></script>
    </>
  );
}
