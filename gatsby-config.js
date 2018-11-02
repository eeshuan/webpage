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
        {
            resolve: `gatsby-plugin-typography`,
            options: {
                pathToConfigModule: `./src/utils/typography.js`
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
        }
    ]
}

module.exports = config;