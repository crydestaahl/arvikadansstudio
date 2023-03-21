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
        username: `crydestaahl`,
        access_token: "IGQVJVYkp3NzJDTmdEREtvM1RsMkhrdFdKTTJKaS1FNm1aSEY0V0RScmt1QTdDMWxSSWNRR1ZApQ29zZAV95SmVmMnFRcHZA1c1BTdmJiczZA3YTJnazc0WlBiZAXpGcU96RGZAvMlFsNG5WREJxRFZASb1hPZAAZDZD",

        paginate: 100,
        maxPosts: 15,
        hashtags: false
      },
    },
  ],
};
