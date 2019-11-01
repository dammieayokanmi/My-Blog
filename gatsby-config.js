module.exports = {
  siteMetadata: {
    title: '{...DAMMIE}',
    author: 'Ayokanmi Damilola Balkis',
    description: 'I convert designs with HTML, CSS and Javascript exactly as they are, I write about modern JavaScript, web development, computer science and opinions are mine.🚀',
    siteUrl: 'https://dammieayokanmi.netlify.com',
    social: {
      twitter: '@Ayokanm60947841'
    }
  },
  // pathPrefix: '/',
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/pages`,
        name: 'pages',
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          'gatsby-remark-prismjs',
          'gatsby-remark-copy-linked-files',
          'gatsby-remark-smartypants',
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `UA-130441994-1`,
      },
    },
    `gatsby-plugin-feed`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `{..DAMMIE}`,
        short_name: `DAMMIE`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#80b9d8`,
        display: `minimal-ui`,
        icon: `src/assets/apple-icon.png`,
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: 'gatsby-plugin-typography',
      options: {
        pathToConfigModule: 'src/utils/typography',
      },
    },
  ],
}
