module.exports = {
  siteMetadata: {
    title: `KITTINUT PRAMHAN`,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `@gatsbyjs`,
  },
  pathPrefix: '/resume-v2',
  plugins: [
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {
      },
    },
    {
      resolve: `gatsby-plugin-offline`,
      options: {
        importWorkboxFrom: `local`,
        globDirectory: rootDir,
        globPatterns,
        modifyUrlPrefix: {
          // If `pathPrefix` is configured by user, we should replace
          // the default prefix with `pathPrefix`.
          "/": `${pathPrefix}/`,
        },
        cacheId: `gatsby-plugin-offline`,
        // Don't cache-bust JS or CSS files, and anything in the static directory,
        // since these files have unique URLs and their contents will never change
        dontCacheBustUrlsMatching: /(\.js$|\.css$|static\/)/,
        runtimeCaching: [
          {
            // Use cacheFirst since these don't need to be revalidated (same RegExp
            // and same reason as above)
            urlPattern: /(\.js$|\.css$|static\/)/,
            handler: `cacheFirst`,
          },
          {
            // Add runtime caching of various other page resources
            urlPattern: /^https?:.*\.(png|jpg|jpeg|webp|svg|gif|tiff|js|woff|woff2|json|css)$/,
            handler: `staleWhileRevalidate`,
          },
          {
            // Google Fonts CSS (doesn't end in .css so we need to specify it)
            urlPattern: /^https?:\/\/fonts\.googleapis\.com\/css/,
            handler: `staleWhileRevalidate`,
          },
        ],
        skipWaiting: true,
        clientsClaim: true,
      }
    },
    // {
    //   resolve: `gatsby-source-mongodb`,
    //   options: {
    //     dbName: `profile`,
    //     collection: `bio`,
    //     server: {
    //       address: 'localhost',
    //       port: '27017'
    //     },
    //     auth: {
    //       user: 'kittinut',
    //       password: 'isylzjkoot',
    //     }
    //   },
    // },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/resume-v2`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
