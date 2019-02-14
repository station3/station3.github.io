import React from "react"
import PropTypes from "prop-types"

const JsonLd = ({ data }) =>
  <script
    type="application/ld+json"
    dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
  />;

export default function HTML(props) {
  return (
    <html {...props.htmlAttributes}>
      <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <link href='//spoqa.github.io/spoqa-han-sans/css/SpoqaHanSans-kr.css' rel='stylesheet' type='text/css' />
        <script src="//dapi.kakao.com/v2/maps/sdk.js?appkey=ab1ec7b70a6b73ab5cedfa536d257272" type="text/javascript" />
        {props.headComponents}
        <JsonLd data={{
          "@context": "http://schema.org",
          "@type": "Organization",
          "name": "스테이션3",
          "url": "https://www.station3.co.kr",
          "sameAs": [
            "https://post.naver.com/station3inc",
            "https://www.facebook.com/dabangapp",
            "https://www.instagram.com/dabang_app/"
          ]
        }}/>
      </head>
      <body {...props.bodyAttributes}>
        {props.preBodyComponents}
        <noscript key="noscript" id="gatsby-noscript">
          This app works best with JavaScript enabled.
        </noscript>
        <div
          key={`body`}
          id="___gatsby"
          dangerouslySetInnerHTML={{ __html: props.body }}
        />
        {props.postBodyComponents}
      </body>
    </html>
  )
}

HTML.propTypes = {
  htmlAttributes: PropTypes.object,
  headComponents: PropTypes.array,
  bodyAttributes: PropTypes.object,
  preBodyComponents: PropTypes.array,
  body: PropTypes.string,
  postBodyComponents: PropTypes.array,
}
