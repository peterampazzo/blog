import type { GatsbyConfig, PluginRef } from "gatsby"
import "dotenv/config"

const shouldAnalyseBundle = process.env.ANALYSE_BUNDLE

const config: GatsbyConfig = {
  siteMetadata: {
    // See all options: https://github.com/LekoArts/gatsby-themes/blob/main/themes/gatsby-theme-minimal-blog/gatsby-config.mjs
    siteTitle: `Pietro Rampazzo`,
    siteTitleAlt: `Pietro Rampazzo`,
    siteHeadline: `Pietro Rampazzo`,
    siteUrl: `https://peterampazzo.com`,
    siteDescription: `Data Engineer from Padova, working in Copenhagen`,
    siteLanguage: `en`,
    author: `@peterampazzo`,
  },
  trailingSlash: `always`,
  plugins: [
    {
      resolve: `@lekoarts/gatsby-theme-minimal-blog`,
      options: {
        navigation: [
          {
            title: `About`,
            slug: `/about`,
          },
          {
            title: `Projects`,
            slug: `/projects`,
          },
          {
            title: `Blog`,
            slug: `/blog`,
          },
        ],
        externalLinks: [
          {
            name: `BlueSky`,
            url: `https://bsky.app/profile/peterampazzo.com`,
          },
          {
            name: `Github`,
            url: `https://github.com/peterampazzo`,
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-sitemap`,
      options: {
        output: `/`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Pietro Rampazzo`,
        short_name: `Pietro`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#000000`,
        display: `standalone`,
        icon: `static/favicon.jpeg`,
      },
    },
  ].filter(Boolean) as Array<PluginRef>,
}

export default config

interface IPostTag {
  name: string
  slug: string
}

interface IPost {
  slug: string
  title: string
  defer: boolean
  date: string
  excerpt: string
  contentFilePath: string
  html: string
  timeToRead: number
  wordCount: number
  tags: Array<IPostTag>
  banner: any
  description: string
  canonicalUrl: string
}

interface IAllPost {
  nodes: Array<IPost>
}

interface ISiteMetadata {
  siteTitle: string
  siteTitleAlt: string
  siteHeadline: string
  siteUrl: string
  siteDescription: string
  siteImage: string
  author: string
}
