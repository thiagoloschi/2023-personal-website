# 2023-personal-website
This is the 2023 version of my personal website.

### Demo
This code is live at https://thiagoloschi.com

<br />


### Which tech are you using?
To build this website I used Typescript, React, Graphql, SCSS, and Gatsby. The content is managed on Contentful and the website is hosted by Netlify. Analytics is offered by Google.

<br />

### What's cool about this?

#### Contentful
The new version of my website offers live content changes, which is something I was looking to implement in the last version. [Contentful](https://www.contentful.com/get-started/) lets you host, manage, and publish your content changes for free. 
What I like the most about them is their webhook integration with Netlify, which triggers a new build anytime content changes are made, allowing for live content updates. You can also host media files and translations, plus their interface is quite simple and easy to use.

#### Netlify
I'm hosting this website on [Netlify](https://docs.netlify.com/get-started/) and I really enjoyed how easy it was to set up webhook integrations. Whenever I push a new commit or make content changes on Contentful, it automatically triggers a new deployment and quickly publishes the new version live.

#### Gatsby
I've been using [Gatsby](https://www.gatsbyjs.com/docs/quick-start/) for a long time now and on this project it made it quite simple to have my content changes available through GraphQL. I also appreciate their Webpack wrapper.

<br />

### Can I use this template?
Yes. As usual, I'm making the code public and you can use it to build your own personal website, or as inspiration for your own project.

#### Live content changes and analytics
Please note that to make use of these features, you'll need to set up your own account with Contentful and Google Analytics. Once you've done that, you'll need to add your API credentials on [`gatsby-config`](https://github.com/thiagoloschi/2023-personal-website/blob/450f970a4529242dcd872075e441792e2038f4e8/gatsby-config.ts#L29). 

#### Getting started
To have this code up and running, clone the repo, and after providing the API keys, simply run `yarn develop` on your terminal of choice. 

#### Alternatives to Contentful and Google Analytics
If you'd rather not have live content changes or analytics, you can just disable these plugins.

<br />

### Editing content data
The content is fetched from Contentful and made available as a GraphQL API. To isolate the data fetching layer from the presentation layer, I built a hook called [`use-profile-data`](https://github.com/thiagoloschi/2023-personal-website/blob/main/src/utils/use-profile-data/use-profile-data.ts) that fetches the content 
and makes it available to be easily consumed by components. If I were to scale this project in the future, I'd probably make that hook more modular or create separate hooks with smaller GraphQL queries for each piece of data. Since my website has only one page, it made sense to have it like that.

If you're not interested in using live content changes, you can either use a local JSON file or edit the content directly inside this hook.
