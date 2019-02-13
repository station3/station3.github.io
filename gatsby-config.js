const path = require('path')

module.exports = {
  siteMetadata: {
    title: `Station3 회사소개`,
    description: `부동산앱 다방, 다방프로, 방주인 등 서비스 소개, 제휴, 문의 안내`,
    author: `Station3, Inc.`,
    keywords: ['스테이션3', '다방', '다방앱', '다방어플', '원룸', '오피스텔', '투룸', '쓰리룸', '아파트', '부동산어플', '부동산앱', '다방프로', '방주인'],
    url: 'https://www.station3.co.kr/',
    image: 'https://static.dabangapp.com/img/opengraph/station3.jpg',
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: path.join(__dirname, `src`, `images`),
      },
    },
    `gatsby-plugin-styled-components`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: 'gatsby-plugin-root-import',
      options: {
        src: path.join(__dirname, 'src'),
        pages: path.join(__dirname, 'src/pages'),
        components: path.join(__dirname, 'src/components'),
        utils: path.join(__dirname, 'src/utils')
      }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `STATION3`,
        short_name: `STATION3`,
        start_url: `/`,
        background_color: `#326cf9`,
        theme_color: `#326cf9`,
        display: `minimal-ui`,
        icon: `src/images/favicon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.app/offline
    // 'gatsby-plugin-offline',
  ],
}
