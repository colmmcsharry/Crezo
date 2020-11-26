import React, { Component } from "react";
import { graphql } from "gatsby";
import Img from "gatsby-image";
import { Link } from "gatsby";
import moment from "moment";
import Layout from "../components/layout";
import SEO from "../components/seo";

export default class Projectspage extends Component {
  render() {
    const { data } = this.props;
    return (
      <Layout>
        <SEO
          title="Projects"
          keywords={[`Rohit Gupta`, `Frontend Developer`, `Developer`, `Projects`]}
        />
        <div className="site-container blogs-page" id="Projectspage">
          <div className="container">
            <div className="section-head">
              <h1 className="line-heading h2">Projects</h1>
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
                        <span className="date">
                          <i className="fas fa-calendar-alt"></i>{" "}
                          {moment(item.node.createdAt).format("LL")}
                        </span>
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
    allContentfulProjects(sort: {fields: createdAt, order: DESC}) {
      edges {
        node {
          title
          slug
          featureImage {
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
          createdAt
        }
      }
    }
  }
`;
