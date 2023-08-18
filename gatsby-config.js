require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
  siteMetadata: {
    title: "Arvika Dansstudio",
    description: "Träna dans hos oss",
  },
  plugins: [
    "gatsby-transformer-sharp",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sharp",
    "gatsby-plugin-image",
    {
      resolve: "gatsby-source-contentful",
      options: {
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
        host: process.env.CONTENTFUL_HOST
      },
    },
    {
      resolve: `gatsby-source-instagram`,
      options: {
        username: `7031238836`,
        access_token: process.env.REACT_APP_INSTAGRAM_USER_TOKEN, 
        paginate: 100,
        maxPosts: 15,
        hashtags: false
      },
    },
    {
      resolve: `gatsby-source-facebook`,
      options: {
        places: [`${facebookPageID}`], // Can be either a numeric ID or the URL ID
        params: {
          fields: 'hours, posts { message, created_time }', // See Facebooks API to see what you can query for
        },
        key: process.env.FACEBOOK_GRAPH_TOKEN, // You will need to create a Facebook application and go through review in order to get an API token.
        version: '5.0', // The version of the graph API to use. Defaults to 5.0
      },
    },
  ],
};
