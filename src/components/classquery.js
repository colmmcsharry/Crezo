import React from 'react'
import { graphql, StaticQuery } from 'gatsby'
import Img from "gatsby-image"

class CoolThing extends React.Component {
  render () {
    console.log(this.props)
    return (
      <div>
        {this.props.site.siteMetadata.description}
        <br/>
        test this is a test
        <br/>
        
      </div>
    )
  }
}

export default () => (
  <StaticQuery
    query={graphql`
      query lolquery {
        site {
          siteMetadata {
            title
            description
          }
        }
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
    render={(data) => (
      <CoolThing site={data.site} />
      
    )}
  />
)