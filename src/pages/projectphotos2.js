/*import React, { Component } from "react";
import Img from "gatsby-image";
import { graphql } from "gatsby";
import PhotosPage from './projectphotos.js'
import Layout from "../components/layout";




export default function Mapprojects ({data}) {

	return (
		<Layout>

<div className="site-container blogs-page" id="Blogs">
          <div className="container">

            <div className="section-head">
              <h1 className="line-heading h2">Projects</h1>
            </div>



 <ul className="projects-list">
              {data.allContentfulProject.edges.map((item, index) => {
                return (
                  <li key={index} className="item">
                    <div className="project-div">
                    <h2> DSCU Office Renovation </h2>
                      <ul className='details'>
                      <li><strong>Client</strong><p>{item.node.client}</p> </li>
                     <li> <strong>Architect</strong><p>{item.node.architect}</p></li>
                     <li> <strong>Status</strong><p>{item.node.status}</p></li>
                     <br/>
                     <li><p>{item.node.description.description}</p></li>
                      </ul>
                      <PhotosPage lolphotosource={item.node.image} />
                      </div>

                      

                    
                  </li>
                );
              })}
            </ul>






</div>
</div>



</Layout>
		)
}

export const projpageQuery = graphql`
  query ProjQuery {
    allContentfulProject(sort: {fields: createdAt, order: DESC}) {
      edges {
        node {
          client
          architect
          status
          description {
        childMarkdownRemark {
          html
        }
        description
      }
          image {
            fluid(maxWidth: 600) {
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
          createdAt
        }
      }
    }
  }
`;*/