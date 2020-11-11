import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import Layout from "../components/layout";
import SEO from "../components/seo";

export default function Mycomp() {
  return (
    <StaticQuery
      query={graphql`
        query Colmquery {
    contentfulProject {
      image {
        file {
          url
        }
        fluid(maxWidth: 600) {
          base64
          aspectRatio
          src
          srcSet
          srcWebp
          srcSetWebp
          sizes
        }
      }
    }
  }

      `}
      render={data => (
        <header>
          <h1>{data.contentfulProject.architect}</h1>
          <Img className="myfluidclass" fluid={data.contentfulProject.image[2].fluid} />
        </header>
      )}
    />
  )
}