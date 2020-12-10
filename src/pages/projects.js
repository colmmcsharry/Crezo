import React, { Component } from "react";
import { graphql } from "gatsby";
import Img from "gatsby-image";
import { Link } from "gatsby";
import Layout from "../components/layout";
import SEO from "../components/seo";

export default class Projectspage extends Component {
  render() {
    const { data } = this.props;
    return (
      <Layout>
        <SEO
          title="Projects"
          keywords={[`Crezo`, `Construction`, `Developer`, `Projects`, `Builder`, `Burnaby`, `Vancouver`]}
        />
        <div className="site-container blogs-page" id="Projectspage">
          <div className="container">
            <div className="section-head">
              <h1 className="line-heading h2 proj">Projects</h1>
              <p className="best">The best design solutions aren’t just about buildings and spaces – they’re about the human experience.</p>
            </div>
            <ul
              className={`blogs-list ${
                data.allContentfulProjects.edges.length < 5 ? "few-blogs" : ""
              }`}
            >
              {data.allContentfulProjects.edges.map((item, index) => {
                return (
                  <li key={index} className="item">
                    <div className="inner">
                      <Link className="link" to={'/' + item.node.slug} />
                      {item.node.featureImage ? (
                        <Img
                          fixed={item.node.featureImage.fluid}
                          objectFit="cover"
                          objectPosition="50% 50%"
                        />
                      ) : (
                        <div className="no-image"></div>
                      )}
                      <div className="details">
                        <h3 className="title">{item.node.title}</h3>
                        
                      </div>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </Layout>
    );
  }
}

export const pageQuery = graphql`
  query ProjectsQuery {
    allContentfulProjects (sort: {order: ASC, fields: updatedAt}, filter: {}) {
      edges {
        node {
          title
          slug
          featureImage {
            fluid(maxWidth: 1500) {
              ...GatsbyContentfulFluid_withWebp
            }
          }
          
        }
      }
    }
  }
`;
