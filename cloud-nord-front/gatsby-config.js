module.exports = {
  siteMetadata: {
    title: "Cloud Nord",
    author: "@mderoullers",
    description: "A website to get the informations about the Cloud Nord event"
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/assets/images/website-icon.png', // This path is relative to the root of the site.
      },
    },
    {
      resolve: 'gatsby-source-strapi',
      options: {
        apiURL: 'http://localhost:1337',
        contentTypes: [ // List of the Content Types you want to be able to request from Gatsby.
          'section',
          'user'
        ],
        queryLimit: 1000,
      },
    },
    'gatsby-plugin-sass',
    'gatsby-plugin-offline'
  ],  
}
