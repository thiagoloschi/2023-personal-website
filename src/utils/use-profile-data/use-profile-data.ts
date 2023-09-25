import { useStaticQuery, graphql } from 'gatsby';

export function useProfileData() {
  const {contentfulPersonalConfigJsonNode: data} = useStaticQuery(graphql`
    query UseProfileData {
      contentfulPersonalConfigJsonNode{
        id
        name
        role
        location
    		picture
        cover 
        about
        experience {
          year
          role
          company
          location
          description
          url
          image
          color
          text
          industry
        }
        contact {
          name
          url
        }
        referral {
          message
          referrer
          relationship
        }
      }
    }
  `);

  return {
    content: data,
  }
}
