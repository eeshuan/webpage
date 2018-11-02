let config = {
    siteMetadata: {
        title: `Hazelnut's Webpage`
    },
    plugins: [
        `gatsby-plugin-typescript`,
        `gatsby-plugin-react-helmet`,
        `gatsby-plugin-sass`,
        `gatsby-transformer-remark`,
        `gatsby-plugin-offline`,
        `gatsby-plugin-sharp`,
        `gatsby-transformer-sharp`,
        {
            resolve: `gatsby-plugin-typography`,
            options: {
                pathToConfigModule: `./src/utils/typography.tsx`
            }
        },
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: `Hazelnut's Webpage`,
                short_name: `Hazelnut's Webpage`,
                start_url: `/`,
                background_color: `#000000`,
                theme_color: `#000000`,
                display: `standalone`,
                icon: `src/images/icon/icon.png`
            }
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
              name: `images`,
              path: `./src/images`
            },
        }
    ]
}

module.exports = config;