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
import Projects from '../components/projects.js'
import Trades from '../components/trades.js'




const IndexPage = ({ data }) => (
  <Layout header="home">
    <SEO
      title={data.contentfulAbout.welcome}
      keywords={[`Rohit Gupta`, `Frontend Developer`, `Developer`]}
    />
    <Banner data={data.contentfulAbout}></Banner>


    {data.contentfulSiteInformation.menus
      .filter(item => item === "About")
      .map(t => {
        return <About data={data.contentfulAbout}></About>;
      })}


         {data.contentfulSiteInformation.menus
      .filter(item => item === "Projects")
      .map(t => {
        return <Projects data={data.allContentfulProjects}></Projects>;
      })}


    {data.contentfulSiteInformation.menus
      .filter(item => item === "Services")
      .map(t => {
        return <Services data={data.allContentfulServices}></Services>;
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
        return <Contact data={data.contentfulAbout}></Contact>; 
      })}

      <Trades />

  </Layout>
);

export default IndexPage;

export const pageQuery = graphql`
  query AbouQuery {
    contentfulAbout {
      name
      welcome
      address
      facebook
      email
      phone
      fax
      id
      bannerList
      address
      linkedin
      description {
        childMarkdownRemark {
          html
        }
      }
      bannerImage {
        fluid(maxWidth: 2000) {
          ...GatsbyContentfulFluid_withWebp
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
            fluid(maxWidth: 1800) {
              ...GatsbyContentfulFluid_withWebp
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
              ...GatsbyContentfulFluid_withWebp
            }
          }
        }
      }
    }
    
    

    contentfulSiteInformation {
      menus
    } 
    
  }
`;
