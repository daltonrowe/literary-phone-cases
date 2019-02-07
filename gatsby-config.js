module.exports = {
  plugins: [
    `gatsby-plugin-netlify-cms`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/design`,
        name: "markdown-pages"
      }
    },
    `gatsby-transformer-remark`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-123637627-3",
        head: false,
        anonymize: false,
        sampleRate: 5,
        siteSpeedSampleRate: 10,
        cookieDomain: "literaryphonecases.com"
      }
    }
  ]
};
