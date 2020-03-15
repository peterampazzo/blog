module.exports = {
  siteMetadata: {
    siteUrl: `https://peterampazzo.com`,
    title: `Pietro Rampazzo`,
    author: `Pietro Rampazzo`,
    description: `Some guy in Padova. Computer Science Student`,
    social: [
      {
        name: `twitter`,
        url: `https://twitter.com/peterampazzo`,
      },
      {
        name: `github`,
        url: `https://github.com/peterampazzo`,
      },
    ],
  },
  plugins: [
    {
      resolve: `gatsby-theme-blog`,
      options: {},
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 1200,
            },
          },
          // {
          //   resolve: `gatsby-remark-responsive-iframe`,
          //   options: {
          //     wrapperStyle: `margin-bottom: 1.0725rem`,
          //   },
          // },
        ],
      },
    },
    `gatsby-plugin-sharp`,
    `gatsby-plugin-sitemap`,
    //`gatsby-plugin-feed`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-63660597-1",
        head: false,
        anonymize: true,
      },
    },
  ],
}
