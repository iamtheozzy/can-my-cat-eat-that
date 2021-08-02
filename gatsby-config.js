module.exports = {
  siteMetadata: {
    title: 'can-my-cat-eat-that',
  },
  plugins: [
    'gatsby-plugin-emotion',
    'gatsby-plugin-image',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    `gatsby-transformer-json`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `./src/data/`
      }
    }
  ]
};
