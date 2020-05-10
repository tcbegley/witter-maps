module.exports = {
  siteMetadata: {
    title: `WitterMaps`,
    description: `An interactive record of Wittertainment's film for every country feature.`,
    author: `@tcbegley`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `content`,
        path: `${__dirname}/src/content`,
      },
    },
    `gatsby-transformer-remark`,
  ],
}
