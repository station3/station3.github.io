import React from "react"
import PropTypes from "prop-types"
import Helmet from "react-helmet"
import { StaticQuery, graphql } from "gatsby"

function SEO({ description, lang, keywords, title }) {
  return (
    <StaticQuery
      query={detailsQuery}
      render={({
        site: {
          siteMetadata: {
            defaultTitle,
            defaultDescription,
            author,
            defaultKeywords,
            defaultImage,
            siteUrl,
          },
        },
      }) => {
        const metaDescription = description || defaultDescription
        return (
          <Helmet
            htmlAttributes={{ lang }}
            title={title}
            defaultTitle={defaultTitle}
            titleTemplate={`%s - ${defaultTitle}`} >
            
            <meta name="description" content={metaDescription} />
            <meta name="keywords" content={keywords.length > 0 ? keywords.join(', ') : defaultKeywords.join(', ')} />
            
            <meta property="og:type" content="website" />
            <meta property="og:title" content={defaultTitle} />
            <meta property="og:description" content={metaDescription} />
            <meta property="og:url" content={siteUrl} />
            <meta property="og:image" content={defaultImage} />
            <meta property="og:image:secure_url" content={defaultImage} />
            <meta property="og:image:type" content="image/jpg" />
            <meta property="og:image:width" content="256" />
            <meta property="og:image:height" content="256" />
            <meta property="og:image:alt" content={metaDescription} />

            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={`${title} - ${defaultTitle}`} />
            <meta name="twitter:description" content={metaDescription} />
            <meta name="twitter:image" content={defaultImage} />
            <meta name="twitter:domain" content={defaultTitle} />
            <meta name="twitter:creator" content={author} />

            <link href='//spoqa.github.io/spoqa-han-sans/css/SpoqaHanSans-kr.css' rel='stylesheet' type='text/css' />
          </Helmet>
        )
      }}
    />
  )
}

SEO.defaultProps = {
  lang: `ko`,
  meta: [],
  keywords: [],
}

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.array,
  title: PropTypes.string.isRequired,
}

export default SEO

const detailsQuery = graphql`
  query DefaultSEOQuery {
    site {
      siteMetadata {
        defaultTitle: title
        defaultDescription: description
        author
        defaultKeywords: keywords
        defaultImage: image
        siteUrl: url
      }
    }
  }
`
