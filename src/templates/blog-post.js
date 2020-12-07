import React, { Component } from "react";
import { graphql } from "gatsby";
import Img from "gatsby-image";
import Layout from "../components/layout";
import SEO from "../components/seo";
import Photospage from '../components/projectphotos.js'

export default class projectPost extends Component {
  render() {
    const data = this.props.data.contentfulProjects;

    const siteurl = this.props.data.contentfulSiteInformation.siteUrl + "/";
    
    const socialConfigss = {
      site: {
        siteMetadata: { siteurl }
      },
      title: data.title,
      slug: data.slug
    };

    return (
      <Layout>
        <SEO
          title={data.title}
          keywords={[
            `Rohit Gupta`,
            `Frontend Developer`,
            `Developer`,
            `${data.title}`
          ]}
        />
        <div className="site-container blog-post">
          <div className="container">
            {data.featureImage ? (
              <Img
                className="feature-img"
                fluid={data.featureImage.fluid} /*was fluid*/
                objectFit="cover"
                objectPosition="50% 50%"
              />
            ) : (
              <div className="no-image"></div>
            )}

            <div className="details">
              <h1 className="title">{data.title}</h1>
              
              <div
                dangerouslySetInnerHTML={{
                  __html: data.description.childMarkdownRemark.html
                }}
              />
            </div>


<Photospage lolphotosource={data.pics}/>


          </div>
        </div>
      </Layout>
    );
  }
}

export const pageQuery = graphql`
  query SinglePostQuery($slug: String!) {
    contentfulProjects(slug: { eq: $slug }) {
      id
      title
      slug
      featureImage {
        fluid(maxWidth: 2000) {
          base64
          aspectRatio
          src
          srcSet
          srcWebp
          srcSetWebp
          sizes
        }
      }
      description {
        childMarkdownRemark {
          html
        }
      }

      pics {
        fluid(maxWidth: 2000) {
          base64
          aspectRatio
          src
          srcSet
          srcWebp
          srcSetWebp
          sizes
        }
        file {
          url
        }
      }

      
    }
    contentfulSiteInformation {
      siteUrl
      
    }
    
  }
`;