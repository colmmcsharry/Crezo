import React, { Component } from "react";
import Img from "gatsby-image";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import SEO from "../components/seo";
import Myproject from '../components/project1.js'

 export default function mypage ({ data }) {
    return (
      <React.Fragment>
      <Layout>

<div className="site-container blogs-page" id="Blogs">
          <div className="container">

            <div className="section-head">
              <h1 className="line-heading h2">Lotus Production Facility Project</h1>
            </div>
              
             <p>{data.contentfulProject.client}</p>
             <p>{data.contentfulProject.architect}</p>
             <p>{data.contentfulProject.description}</p>
             <p>{data.contentfulProject.location.lon}</p>
             <p>{data.contentfulProject.location.lat}</p>
             <Img className="myfluidclass" fluid={data.contentfulProject.image[2].fluid} />
  
             
          </div>
        </div>



       
      </Layout>
      </React.Fragment>
    );
  }

export const colmQuery = graphql`
  query colmQuery2 {
    contentfulProject {
      client
      architect
      description{
        childMarkdownRemark {
          html
        }
      }
      
      location{
        lon
        lat
      }
      image{
        fluid(maxWidth: 3000) {
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
`;