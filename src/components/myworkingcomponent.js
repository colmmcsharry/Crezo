import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

export default function Myheader(props) {
  return (
    <StaticQuery
      query={graphql`
        query Colquery {
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
      architect
    }
    contentfulAboutMe {
      name
      photo {
        file {
          url
        }
        fluid {
          base64
          aspectRatio
          src
          srcSet
          srcWebp
          srcSetWebp
          sizes
        }
      }
      welcome
      manyphoto{
        id
        title
        description
        file{
          url
        }
        fluid {
          base64
          aspectRatio
          src
          srcSet
          srcWebp
          srcSetWebp
          sizes
        }
      }

      age
      address
      facebook
      github
      gmail
      id
      instagram
      linkdin
      twitter
      location
      description {
        childMarkdownRemark {
          html
        }
      }
      
    }
  }

      `}
      render={data => (
        <header>
          <div className="hehe">{data.contentfulProject.architect}</div>
          <br/>  <br/><br/><br/><br/><br/>
          <Img className="myfluidclass" fluid={data.contentfulProject.image[0].fluid} />

          <ul className="photos-page-list">

{data.contentfulAboutMe.manyphoto.map((pic, index) => {
  return <li key={index} className="item"> <Img
                        fixed={pic.fluid}
                        objectFit="cover"
                        objectPosition="50% 50%"/>
  <span>here are the fluidsmanyphoto?</span>
   </li>
})}
     </ul>

     <img src={props.lastpic}/>

<ul className="photos-page-list">


{props.photosource.map((pic, index) => {
  return <li key={index} className="item"> <Img
                        fixed={pic.fluid}
                        objectFit="cover"
                        objectPosition="50% 50%"/>
  <span>listfromprops</span>
   </li>
})}
     </ul>


        </header>
      )}
    />
  )
}
