import React from "react";
import { graphql } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";

import Banner from "../components/banner";
import About from "../components/about";
import Service from "../components/service";
import Work from "../components/work";
import Blogs from "../components/blogs";
import Testimonial from "../components/testimonial";
import Contact from "../components/contact";
import Photos from "../components/photos";
import Mycomp from '../components/Mycomp.js';
import Myheader from '../components/myworkingcomponent.js';
import PhotosPage from './projectphotos.js'
import Project from '../components/project.js'
import Mapprojects from './projectphotos2.js'

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
      .filter(item => item === "Service")
      .map(t => {
        return <Service data={data.allContentfulService}></Service>;
      })}

    {data.contentfulSiteInformation.menus
      .filter(item => item === "Blogs")
      .map(t => {
        return <Blogs data={data.allContentfulBlogs}></Blogs>;
      })}

   {/* {data.contentfulSiteInformation.menus
      .filter(item => item === "Work")
      .map(t => {
        return <Work data={data.allContentfulWorks}></Work>;
      })}
*/}
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
        return <Contact data={data.contentfulAboutMe.gmail}></Contact>; 
      })}

      {/*<Project lolphotosource={data.contentfulProject.image}
      sourcename={data.contentfulProject.status} />

      <PhotosPage lolphotosource={data.contentfulProject.image} />

*/}
      {/*<span>{data.contentfulProject.architect}</span>*/}
      

  </Layout>
);

export default IndexPage;

export const pageQuery = graphql`
  query AboutQuery {
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
      age
      address
      facebook
      github
      gmail
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
      bannerImage {
        fluid(maxWidth: 1500) {
          base64
          aspectRatio
          src
          srcSet
          srcWebp
          srcSetWebp
          sizes
        }
      }
      bannerList
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
    allContentfulService {
      edges {
        node {
          title
          description {
            childMarkdownRemark {
              html
            }
          }
        }
      }
    }
    allContentfulBlogs(limit: 5, sort: {fields: createdAt, order: DESC}) {
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
          createdAt
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
