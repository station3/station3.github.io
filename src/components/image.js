import React, { Component } from "react"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

/*
 * This component is built using `gatsby-image` to automatically serve optimized
 * images with lazy loading and reduced file sizes. The image is loaded using a
 * `StaticQuery`, which allows us to load the image from directly within this
 * component, rather than having to pass the image data down from pages.
 *
 * For more information, see the docs:
 * - `gatsby-image`: https://gatsby.app/gatsby-image
 * - `StaticQuery`: https://gatsby.app/staticquery
 */

export default class Image extends Component {
  render() {
    return (
      <StaticQuery
        query={graphql`
          query {
            allImageSharp {
              edges {
                node {
                  fluid(maxWidth: 1200) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            }
          }
        `}
        render={data => {
          return (
            <Img fluid={data.allImageSharp.edges.find(elem => {
              // Match string after final slash
              return elem.node.fluid.src.split('/').pop() === this.props.imgSrc
            }).node.fluid} />
          )
        }}
      />
    )
  }
}