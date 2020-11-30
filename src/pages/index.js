import React from "react";
import { graphql } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";
import 'bootstrap/dist/css/bootstrap.min.css';
import Banner from "../components/banner";
import About from "../components/about";
import Services from "../components/services.js";
import Testimonial from "../components/testimonial";
import Contact from "../components/contact";
import Photos from "../components/photos";
import PhotosPage from './projectphotos.js'
import Projects from '../components/projects.js'
import Mapprojects from './projectphotos2.js'
import Readmore from '../components/readmore.js'
import Trades from '../components/trades.js'
import Button from 'react-bootstrap/Button';
import Collapse from 'react-bootstrap/Collapse';

const IndexPage = ({ data }) => (
  <Layout header="home">
    <SEO
      title={data.contentfulAboutMe.welcome}
      keywords={[`Rohit Gupta`, `Frontend Developer`, `Developer`]}
    />
    <Banner data={data.contentfulAboutMe}></Banner>

    {data.contentfulSiteInformation.menus
      .filter(item => item === "About")
      .map(t => {
        return <About data={data.contentfulAboutMe}></About>;
      })}

        {data.contentfulSiteInformation.menus
      .filter(item => item === "Photos")
      .map(t => {
        return <Photos data={data.contentfulPhotos}></Photos>;
      })}


    {data.contentfulSiteInformation.menus
      .filter(item => item === "Services")
      .map(t => {
        return <Services data={data.allContentfulServices}></Services>;
      })}

    {data.contentfulSiteInformation.menus
      .filter(item => item === "Projects")
      .map(t => {
        return <Projects data={data.allContentfulProjects}></Projects>;
      })}


    {data.contentfulSiteInformation.menus
      .filter(item => item === "Testimonials")
      .map(t => {
        return (
          <Testimonial data={data.allContentfulTestimonials}></Testimonial>
        );
      })}

  
    {data.contentfulSiteInformation.menus
      .filter(item => item === "Contact")
      .map(t => {
        return <Contact data={data.contentfulAboutMe}></Contact>; 
      })}

      <Trades />

      

  </Layout>
);

export default IndexPage;

export const pageQuery = graphql`
  query AboutQuery {
    contentfulAboutMe {
      name
      welcome
      address
      facebook
      gmail
      phone
      fax
      id
      address
      linkdin
      description {
        childMarkdownRemark {
          html
        }
      }
      bannerImage {
        fluid(maxWidth: 1800) {
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
    contentfulProject {
      id
      status
      image {
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



    }
    allContentfulServices {
      edges {
        node {
          title
          preview
          description {
            childMarkdownRemark {
              html
            }
          }
        }
      }
    }
    allContentfulProjects(limit: 5, sort: {order: ASC, fields: updatedAt}, filter: {}          ) {
      edges {
        node {
          title
          slug
          
          featureImage {
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
    }
    allContentfulTestimonials {
      edges {
        node {
          name
          subTitle
          description {
            childMarkdownRemark {
              html
            }
          }
          avatarImage {
            fluid(maxWidth: 200) {
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
    }
    
    allContentfulProject {
      edges {
        node {
          client
          architect
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
    }
    
    contentfulPhotos {
      photos {
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
    contentfulSiteInformation {
      menus
    }
    
  }
`;
