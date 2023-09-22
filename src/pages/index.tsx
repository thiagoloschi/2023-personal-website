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
          <p>With over 10 years of software development experience, I have an exceptional track record in building high-scale products, in a variety of industries and company sizes. 
          As a Software engineer at heart, I have a passion for simplifying problems and using technology to help make the world a better place. 
          I love building flawless end-to-end user experiences, and writing code that is simple and clean.
          <br /><br />
          Over the last 3 years, my focus has been on building and leading high-performing teams at Shopify and Slice. My passion lays in enabling my people's full potential, 
          coaching them into becoming high-achievers, and delivering high-impact projects on time. To achieve that, it's essential to foster a culture of collaboration, trust and empathy, 
          especially in remote evironments, where you have to strategically come up with rituals to replace the organic context switching from the in-office times, and that's where I thrive.
          <br/><br/>
          I'd love to connect to chat about thouthful leadership, the tech industry in general, travelling, soccer, living abroad, or to discuss career opportunities. 
          I'm also happy to provide mentorship and career advice if you believe I can be of help! Feel free to contact me on my social networks and I'll get back to you as soon as I can.
        </p>
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
