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
        access_token: "IGQVJYcldHdi1OSGVCSC1UNkE2Rm02SDJsaFQ5VFoxYjIzRXB4TDhnMXlyblBSckk4RFh0Tm8wdWZAZAVFZALQnEyeWxNNHZACX3JrN3JWdGZAZANFgtaDhMR3poQ2FtbVFTcGtGbjR0V3ZAPR0FQalFOZAFhVMQZDZD",
        paginate: 100,
        maxPosts: 15,
        hashtags: false
      },
    },
  ],
};
