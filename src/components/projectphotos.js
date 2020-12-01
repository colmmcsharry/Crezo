import React, { Component } from "react";
import Img from "gatsby-image";
import { graphql } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";

export default class Photospage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activePopup: false,
      selectedItem: 0
    };
  }

  render() {
    const { data } = this.props;
    const { activePopup, selectedItem } = this.state;

    return (
      
        <React.Fragment>
          
            
             
            <ul className="photos-page-list">
              {this.props.lolphotosource.map((item, index) => {
                return (
                  <li key={index} className="item">
                    <div
                      className="inner"
                      onClick={() => {
                        this.setState({
                          activePopup: true,
                          selectedItem: index
                        });
                      }}
                    >
                      <Img
                        fixed={item.fluid}
                        objectFit="cover"
                        objectPosition="50% 50%"
                      />
                    </div>
                  </li>
                );
              })}
            </ul>

            {activePopup ? (
              <div className="rg-popup">
                <span
                  className="popup-layer"
                  onClick={() => {
                    this.setState({
                      activePopup: false
                    });
                  }}
                ></span>

                <div className="popup-inner">
                  <i
                    className="fas fa-times"
                    onClick={() => {
                      this.setState({
                        activePopup: false
                      });
                    }}
                  ></i>

                  <Img fluid={this.props.lolphotosource[selectedItem].fluid}
                        alt="popup-img" 
                      />
                  {/* <img
                    src={this.props.lolphotosource[selectedItem].file.url}
                    alt="popup-img"
                  />  */}
                </div>
              </div>
            ) : (
              ""
            )}


          
        </React.Fragment>
      
    );
  }
}
